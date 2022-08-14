import React from 'react';
import { DashboardIcon, BrainIcon } from '../../ui/Icons/Icons';
import { RouteLink, RoutesList } from './Navigation.d';

const linkApp: RoutesList[] = [
    {
        header: 'General',
        order: 1,
        links: [
            {
                label: 'Dashboard',
                to: '/',
                icon: <DashboardIcon />
            },
            {
                label: 'Mnemonic',
                to: '/mnemonic',
                icon: <BrainIcon />
            }
        ]
    },
    {
        header: 'Additional',
        order: 2,
        links: []
    }
];

/**
 * Collects links in a flat array.
 *
 * @param {RoutesList} obj Object with links and nested links.
 */
const collectLinkProps = (obj: RoutesList): Pick<RouteLink, 'label' | 'to'>[] =>
    obj.links.reduce<RouteLink[]>((acc, cur) => {
        const link = (label: RouteLink['label'], to: RouteLink['to']) => ({ label, to });

        if (cur.nested) {
            const nestedLinkList = cur.nested.reduce<RouteLink[]>(
                (nestedAcc, nestedCur) => nestedAcc.concat(link(nestedCur.label, nestedCur.to)),
                []
            );

            return acc.concat(link(cur.label, cur.to), ...nestedLinkList);
        }

        return acc.concat(link(cur.label, cur.to));
    }, []);

/**
 * Defines raw links into a flat array.
 *
 * @param {RoutesList[]} rawList Raw link list
 */
const defineFlatLinkList = (rawList: RoutesList[]): Pick<RouteLink, 'label' | 'to'>[] =>
    rawList.reduce<RouteLink[]>((acc, cur) => acc.concat(collectLinkProps(cur)), []);

export const linkList = linkApp.sort((a, b) => a.order - b.order);
export const flatLinkList = defineFlatLinkList(linkList);
