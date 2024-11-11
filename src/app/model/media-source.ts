export class MediaSource {
    id?:number;
    context?: string;
    data?: BlobPart[];
    type: 'PDF' | 'IMAGE' | 'VIDEO';
    url?: string | ArrayBuffer;
}
