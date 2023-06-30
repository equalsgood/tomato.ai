import cls from './AvailableRole.module.css';
import { CareerRole } from '../CareersAvailableRoles';
import { Divider, Text, TextVariants } from 'shared/components';
import LocationIcon from 'shared/assets/icons/location-icon-blue.svg';
import ArrowIcon from 'shared/assets/icons/arrow-green-right.svg';

export const AvailableRole = (props: CareerRole) => {
    const { icon, rate, location, description, title, applyLink } = props;

    return (
        <li className={cls.role}>
            {icon}
            <div className={cls.generalInfoContainer}>
                <div className={cls.titleContainer}>
                    <Text tag="h3" variant={TextVariants.SUBTITLE_SMALL}>{title}</Text>
                    <div className={cls.locationContainer}>
                        <LocationIcon/>
                        <span>{location}</span>
                    </div>
                </div>
                <Text tag="p" variant={TextVariants.DEFAULT} classNamesProps={cls.description}>{description}</Text>
            </div>
            <Divider horizontal/>
            <div className={cls.rateInfoContainer}>
                <div className={cls.rateContainer}>
                    <Text tag="p" variant={TextVariants.PARAGRAPH_TITLE} classNamesProps={cls.rateBadge}>Yearly Rate:</Text>
                    <Text tag="p" variant={TextVariants.SUBTITLE_SMALL} classNamesProps={cls.rate}>{rate}</Text>
                </div>
                <a href={applyLink} className={cls.link}>
                    <span>Apply Now</span>
                    <ArrowIcon/>
                </a>
            </div>
        </li>
    );
};