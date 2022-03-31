import React from 'react';
import { ComponentIcon } from '../../ui/Icons/Icons';
import { RouteLinkInterface, RoutesListInterface } from './Navigation.d';

const linkApp: RoutesListInterface[] = [
    {
        header: 'General',
        order: 1,
        links: [
            {
                label: 'Home',
                to: '/',
                icon: <ComponentIcon />
            },
            {
                label: 'Mnemonic',
                to: '/mnemonic',
                icon: <ComponentIcon />
            }
        ]
    }
];

/**
 * Collects links in a flat array
 * @param obj Object with links and nested links
 */
const collectLinkProps = (obj: RoutesListInterface): Pick<RouteLinkInterface, 'label' | 'to'>[] =>
    obj.links.reduce<RouteLinkInterface[]>((acc, cur) => {
        const link = (label: RouteLinkInterface['label'], to: RouteLinkInterface['to']) => ({ label, to });

        if (cur.nested) {
            const nestedLinkList = cur.nested.reduce<RouteLinkInterface[]>(
                (nestedAcc, nestedCur) => nestedAcc.concat(link(nestedCur.label, nestedCur.to)),
                []
            );

            return acc.concat(link(cur.label, cur.to), ...nestedLinkList);
        }

        return acc.concat(link(cur.label, cur.to));
    }, []);

/**
 * Defines raw links into a flat array
 * @param rawList Raw link list
 */
const defineFlatLinkList = (rawList: RoutesListInterface[]): Pick<RouteLinkInterface, 'label' | 'to'>[] =>
    rawList.reduce<RouteLinkInterface[]>((acc, cur) => acc.concat(collectLinkProps(cur)), []);

export const linkList = linkApp.sort((a, b) => a.order - b.order);
export const flatLinkList = defineFlatLinkList(linkList);
