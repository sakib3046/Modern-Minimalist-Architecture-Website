export interface Footer {
    _type:         string;
    portfolios:    Portfolios;
    _id:           string;
    title:         string;
    sections:      Sections;
    social:        Social;
    _rev:          string;
    _updatedAt:    Date;
    _createdAt:    Date;
    CopyWriteInfo: string[];
}

export interface Portfolios {
    portfolios: Portfolio[];
}

export interface Portfolio {
    _type: string;
    name:  string;
    _key:  string;
    url:   string;
}

export interface Sections {
    section: Portfolio[];
}

export interface Social {
    socials: Portfolio[];
    title:   string;
}

export type FooterCard={
    _type: string;
    name:  string;
    _key:  string;
    url:   string;
}