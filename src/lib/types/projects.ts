import type { SanityImageObject } from '@sanity/image-url/lib/types/types';
import type { Slug } from 'sanity';

export interface Projects {
    _createdAt: Date;
    _rev:       string;
    _type:      string;
    project:    Project;
    _id:        string;
    _updatedAt: Date;
    image:      null;
}

export interface Project {
    title:        string;
    categoryName: CategoryName;
    slug:         Slug;
    image:        SanityImageObject[];
    description:  string;
}

export interface CategoryName {
    _ref:  string;
    _type: string;
}

