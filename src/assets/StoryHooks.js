import { useState, useEffect } from 'react';
import AXIOS from 'axios';

/**
 * 
 * @param { String } FirstName 
 * @param { String } LastName 
 * @param { image } picture 
 */
export function useCreateStory(firstName, lastName, image) {

    /**
     * 
     * @param { string } firstName - owner firstname
     * @param { string } lastName - owner lastname
     * @param { uri } image - image uploaded
     */
    function Story(firstName, lastName, image) {
        const date = new Date();
        this.owner = {
            firstName,
            lastName
        };
        // this.image = image;
        this.uploadTime = date.getHours();
        this.expiryTime = this.uploadTime.setHours(this.uploadTime + 24);
    }


    return Story;

}

export async function useGetStories() {
    return [
        {
            owner: {
                firstName: "Karan",
                lastName: "pal"
            },
            uploadTime: 0 + "hrs",
            expiryTime: 24 + "hrs"
        }

    ]
}

