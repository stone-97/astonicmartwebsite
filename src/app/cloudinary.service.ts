import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CloudinaryService {

    getImageUrl(imageUrl: string): string {
        return imageUrl;
    }

}