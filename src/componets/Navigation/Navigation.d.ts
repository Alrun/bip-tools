import React from 'react';

export interface RouteLink {
    /**
     * Link label
     */
    label: string;
    /**
     * Link url
     */
    to: string;
    /**
     * Link icon
     */
    icon?: React.ReactElement<React.ReactSVGElement>;
    /**
     * Login required to access
     */
    requireAuth?: boolean;
}

export interface NestedLink extends RouteLink {
    /**
     * Nested links
     */
    nested?: RouteLink[];
}

export interface RoutesList {
    /**
     * Group header
     */
    header: string;
    /**
     * Sorting order
     */
    order: number;
    /**
     * Nested links
     */
    links: NestedLink[];
}
