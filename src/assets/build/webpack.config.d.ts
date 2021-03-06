export const stats: boolean;
export const devtool: string | boolean;
export const context: any;
export const entry: any;
export namespace cache {
    const type: string;
}
export const externals: any;
export namespace output {
    const path: any;
    const publicPath: any;
    const filename: string;
}
export namespace module {
    const rules: ({
        test: RegExp;
        exclude: RegExp[];
        use: string[];
        include?: undefined;
        type?: undefined;
        generator?: undefined;
    } | {
        test: RegExp;
        use: any[];
        exclude?: undefined;
        include?: undefined;
        type?: undefined;
        generator?: undefined;
    } | {
        test: RegExp;
        include: any;
        type: string;
        generator: {
            filename: string;
        };
        exclude?: undefined;
        use?: undefined;
    })[];
}
export const plugins: any[];
export namespace resolve {
    const extensions: string[];
}
