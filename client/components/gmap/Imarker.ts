// just an interface for type safety.
export interface Imarker {
    lat: number;
    lng: number;
    temp: number;
    label?: string;
    draggable: boolean;
}