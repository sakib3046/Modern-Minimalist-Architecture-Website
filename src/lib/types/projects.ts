import type { SanityImageObject } from '@sanity/image-url/lib/types/types';
import type { Slug } from 'sanity';
import type { Category } from './landing.types';

export interface Projects {
    _createdAt: Date;
    _rev:       string;
    _type:      'project';
    _id:        string;
    _updatedAt: Date;
    title:        string;
    categoryName: Category;
    slug:         Slug;
    image:        SanityImageObject[];
    description:  string;
}


