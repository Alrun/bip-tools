import React from 'react';

export interface RouteLinkInterface {
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

export interface NestedLinkInterface extends RouteLinkInterface {
    /**
     * Nested links
     */
    nested?: RouteLinkInterface[];
}

export interface RoutesListInterface {
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
    links: NestedLinkInterface[];
}
