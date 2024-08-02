/* eslint-disable */
import { FuseNavigationItem } from '@fuse/components/navigation';
import { AuthUtils } from 'app/core/auth/auth.utils';
import { UserService } from 'app/core/user/user.service';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id: 'example',
        title: 'Example',
        type: 'basic',
        icon: 'heroicons_outline:chart-pie',
        link: '/example'
    }
];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id: 'example',
        title: 'Example',
        type: 'basic',
        icon: 'heroicons_outline:chart-pie',
        link: '/example'
    }
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id: 'example',
        title: 'Example',
        type: 'basic',
        icon: 'heroicons_outline:chart-pie',
        link: '/example'
    }
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id: 'quan-tri-he-thong',
        title: 'QUẢN TRỊ HỆ THỐNG',
        type: 'group',
        icon: 'mat_outline:arrow_drop_down',
        hidden(item) {
            if (AuthUtils.isAdmin()) {
                return false;
            }
            return true;
        },
        children: [
            {
                id: 'example',
                title: 'Example',
                type: 'basic',
                link: '/example',
                hidden(item) {
                    return false;
                },
            },
            {
                id: 'nguoi-dung',
                title: 'Người dùng',
                type: 'basic',
                link: '/quan-tri-nguoi-dung',
                hidden(item) {
                    return false;
                },
            },
        ]
    },
];
