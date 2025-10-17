import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                src="https://p77-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7317115603314016262~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=b28b53d9&x-expires=1760882400&x-signature=vHgC3pQVCqS0pNG7NtbLo4sqI8c%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my"
                className={cx('avatar')}
                alt="name"
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon icon={faCircleCheck} className={cx('check')} />
                </p>
                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;
