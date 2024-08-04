/* eslint-disable */
import { FuseNavigationItem } from '@fuse/components/navigation';
import { AuthUtils } from 'app/core/auth/auth.utils';
import { UserService } from 'app/core/user/user.service';

export const defaultNavigation: FuseNavigationItem[] = [
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
                id: 'nguoi-dung',
                title: 'Người dùng',
                type: 'basic',
                link: '/quan-tri-nguoi-dung',
                hidden(item) {
                    return false;
                },
            },
            {
                id: 'danh-sach-khieu-nai',
                title: 'Danh sách khiếu nại',
                type: 'basic',
                link: '/danh-sach-khieu-nai',
                hidden(item) {
                    return false;
                },
            },
            {
                id: 'thong-ke',
                title: 'Thống kê',
                type: 'basic',
                link: '/thong-ke',
                hidden(item) {
                    return false;
                },
            },
            {
                id: 'nhat-ky-he-thong',
                title: 'Nhật ký hệ thống',
                type: 'basic',
                link: '/nhat-ky-he-thong',
                hidden(item) {
                    return false;
                },
            },
        ]
    },
    {
        id: 'thiet-lap-he-thong',
        title: 'THIÊT LẬP HỆ THỐNG',
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
                id: 'danh-muc',
                title: 'Danh mục',
                type: 'basic',
                link: '/quan-tri-danh-muc',
                hidden(item) {
                    return false;
                },
            },
        ]
    },
    {
        id: 'menu',
        title: 'MENU',
        type: 'group',
        icon: 'mat_outline:arrow_drop_down',
        children: [
            {
                id: 'don-hang-da-mua',
                title: 'Đơn hàng đã mua',
                type: 'basic',
                link: '/don-hang-da-mua',
                hidden(item) {
                    return false;
                },
            },
            {
                id: 'gian-hang-yeu-thich',
                title: 'Gian hàng yêu thích',
                type: 'basic',
                link: '/gian-hang-yeu-thich',
                hidden(item) {
                    return false;
                },
            },
            {
                id: 'lich-su-thanh-toan',
                title: 'Lịch sử thanh toán',
                type: 'basic',
                link: '/lich-su-thanh-toan',
                hidden(item) {
                    return false;
                },
            },
            {
                id: 'quan-ly-bai-viet',
                title: 'Quản lý bài viết',
                type: 'basic',
                link: '/quan-ly-bai-viet',
                hidden(item) {
                    return false;
                },
            },
        ]
    },
    {
        id: 'danh-cho-nguoi-ban',
        title: 'DÀNH CHO NGƯỜI BÁN',
        type: 'group',
        icon: 'mat_outline:arrow_drop_down',
        hidden(item) {
            if (AuthUtils.isSeller() || AuthUtils.isAdmin()) {
                return false;
            }
            return true;
        },
        children: [
            {
                id: 'gian-hang-cua-toi',
                title: 'Gian hàng của tôi',
                type: 'basic',
                link: '/gian-hang-cua-toi',
                hidden(item) {
                    return false;
                },
            },

            {
                id: 'tao-gian-hang',
                title: 'Tạo gian hàng',
                type: 'basic',
                link: '/tao-gian-hang',
                hidden(item) {
                    return false;
                },
            },
            {
                id: 'theo-doi-don-hang',
                title: 'Theo dõi đơn hàng',
                type: 'basic',
                link: '/theo-doi-don-hang',
                hidden(item) {
                    return false;
                },
            },
            {
                id: 'lich-su-rut-tien',
                title: 'Lịch sử rút tiền',
                type: 'basic',
                link: '/lich-su-rut-tien',
                hidden(item) {
                    return false;
                },
            },
        ]
    },
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
    {
        id: 'thiet-lap-he-thong',
        title: 'THIÊT LẬP HỆ THỐNG',
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
                id: 'danh-muc',
                title: 'Danh mục',
                type: 'basic',
                link: '/quan-tri-danh-muc',
                hidden(item) {
                    return false;
                },
            },
        ]
    },
    {
        id: 'menu',
        title: 'MENU',
        type: 'group',
        icon: 'mat_outline:arrow_drop_down',
        children: [
            {
                id: 'don-hang-da-mua',
                title: 'Đơn hàng đã mua',
                type: 'basic',
                link: '/don-hang-da-mua',
                hidden(item) {
                    return false;
                },
            },
            {
                id: 'gian-hang-yeu-thich',
                title: 'Gian hàng yêu thích',
                type: 'basic',
                link: '/gian-hang-yeu-thich',
                hidden(item) {
                    return false;
                },
            },
            {
                id: 'lich-su-thanh-toan',
                title: 'Lịch sử thanh toán',
                type: 'basic',
                link: '/lich-su-thanh-toan',
                hidden(item) {
                    return false;
                },
            },
            {
                id: 'quan-ly-bai-viet',
                title: 'Quản lý bài viết',
                type: 'basic',
                link: '/quan-ly-bai-viet',
                hidden(item) {
                    return false;
                },
            },
        ]
    },
    {
        id: 'danh-cho-nguoi-ban',
        title: 'DÀNH CHO NGƯỜI BÁN',
        type: 'group',
        icon: 'mat_outline:arrow_drop_down',
        hidden(item) {
            if (AuthUtils.isSeller() || AuthUtils.isAdmin()) {
                return false;
            }
            return true;
        },
        children: [
            {
                id: 'gian-hang-cua-toi',
                title: 'Gian hàng của tôi',
                type: 'basic',
                link: '/gian-hang-cua-toi',
                hidden(item) {
                    return false;
                },
            },

            {
                id: 'tao-gian-hang',
                title: 'Tạo gian hàng',
                type: 'basic',
                link: '/tao-gian-hang',
                hidden(item) {
                    return false;
                },
            },
            {
                id: 'theo-doi-don-hang',
                title: 'Theo dõi đơn hàng',
                type: 'basic',
                link: '/theo-doi-don-hang',
                hidden(item) {
                    return false;
                },
            },
            {
                id: 'lich-su-rut-tien',
                title: 'Lịch sử rút tiền',
                type: 'basic',
                link: '/lich-su-rut-tien',
                hidden(item) {
                    return false;
                },
            },
        ]
    },
];
