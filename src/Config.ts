export interface Config {
    /**
     * Resolution of the returned image. For supported resolutions, check in parameter
     * Properties.Image.Resolution.
     */
    resolution?: string;
    /**
     * Selects the video source ("1"..."n", "quad"). If omitted the default value camera "1" is
     * used. This argument is only valid for Axis products with more than one video source. That is
     * cameras with multiple view areas and video encoders with multiple video channels.
     */
    camera?: string;
    /**
     * Adjusts the compression level (0...100) of the image. Higher values correspond to higher
     * compression, that is lower quality and smaller image size. Note: This value is internally
     * mapped and is therefore product-dependent.
     */
    compression?: number;
    /**
     * Rotate the image clockwise (0, 90, 180, 270). The number of rotation alternatives in an Axis
     * product is defined by the parameter Properties.Image.Rotation.
     */
    rotation?: number;
    palette: TODO;
    /**
     * Enable/disable (1, 0) square pixel (aspect ratio) correction. If the parameter is set to 1
     * the Axis product will adjusts the aspect ratio to make it appear as intended.
     */
    squarepixel?: number;
}
