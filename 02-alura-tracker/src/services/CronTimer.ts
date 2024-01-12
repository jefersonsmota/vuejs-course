export function secondsToHms(seconds: any) : string {
    let d = Number(seconds);
    let h = Math.floor(d / 3600);
    let m = Math.floor(d % 3600 / 60);
    let s = Math.floor(d % 3600 % 60);
    const format = (n: number) => n < 10 ? '0'+n : n;
    return `${format(h)}:${format(m)}:${format(s)}`;
}