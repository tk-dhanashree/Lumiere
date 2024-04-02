import { useRef, useState, useCallback, forwardRef, useImperativeHandle, useEffect } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
    ViewerApp,
    AssetManagerPlugin,
    GBufferPlugin,
    ProgressivePlugin,
    TonemapPlugin,
    SSRPlugin,
    SSAOPlugin,
    BloomPlugin,
    GammaCorrectionPlugin,
    addBasePlugins,
    mobileAndTabletCheck,
} from "webgi";
import { scrollAnimation } from '../lib/scroll-animation';

gsap.registerPlugin(ScrollTrigger);

export default function WebgiViewer() {

    const canvasRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    const memoizedScrollAnimation = useCallback((position, target, isMobile, onUpdate) => {
        if (position && target && onUpdate) {
            scrollAnimation(position, target, isMobile, onUpdate);
        }
    }, []);

    const setupViewer = useCallback(async () => {
        // Initialize the viewer
        const viewer = new ViewerApp({
            canvas: canvasRef.current,
            useRgbm: false
        })

        const isMobileOrTablet = mobileAndTabletCheck();
        setIsMobile(isMobileOrTablet);

        const manager = await viewer.addPlugin(AssetManagerPlugin);

        const camera = viewer.scene.activeCamera;
        const position = camera.position;
        const target = camera.target;

        // Add plugins individually.
        await viewer.addPlugin(GBufferPlugin)
        await viewer.addPlugin(new ProgressivePlugin(32))
        await viewer.addPlugin(new TonemapPlugin(true))
        await viewer.addPlugin(GammaCorrectionPlugin)
        await viewer.addPlugin(SSRPlugin)
        await viewer.addPlugin(SSAOPlugin)
        // await viewer.addPlugin(DiamondPlugin)
        // await viewer.addPlugin(FrameFadePlugin)
        // await viewer.addPlugin(GLTFAnimationPlugin)
        // await viewer.addPlugin(GroundPlugin)
        await viewer.addPlugin(BloomPlugin)
        // await viewer.addPlugin(TemporalAAPlugin)
        // await viewer.addPlugin(AnisotropyPlugin)
        // and many more...

        viewer.renderer.refreshPipeline();

        // Import and add a GLB file.
        const options = { autoCenter: false }
        await manager.addFromPath("camera.glb", options);
        viewer.getPlugin(TonemapPlugin).config.clipBackground = true;
        viewer.scene.activeCamera.setCameraOptions({ controlsEnabled: false })

        if (isMobileOrTablet) {
            position.set(-20.0662022933, 7.347272621, 8.7272238704);
            target.set(-2, -0.1316151392, -2);
            // props.contentRef.current.className = "mobile-or-talet";
        }

        window.scrollTo(0, 0, 0);

        let needsUpdate = true;

        const onUpdate = () => {
            needsUpdate = true;
            viewer.setDirty();
        }

        viewer.addEventListener("preFrame", () => {
            if (needsUpdate) {
                camera.positionTargetUpdated(true);
                needsUpdate = false;
            }
        });

        memoizedScrollAnimation(position, target, isMobileOrTablet, onUpdate);
    }, []);

    useEffect(() => {
        setupViewer();
    }, []);

    return (
        <div id='webgi-canvas-container' className='-mt-24'>
            <canvas id='webgi-canvas' ref={canvasRef} />
        </div>
    )
}
