declare module inLib {
    export function awake(iosMessage: string, androidMessage?: string);
    export function share(options: Object);
    export function track(seed: string);
    export module com {
        export function isWeChat(): boolean;
        export function isAndroid(): boolean;
        export function isIos(): boolean;
        export function isInApp(): boolean;
        export function isWYMusic(): boolean;
        export function ua(): boolean;
        export function getQueryString(string): string;
        export function getToken(): string;
    }
}