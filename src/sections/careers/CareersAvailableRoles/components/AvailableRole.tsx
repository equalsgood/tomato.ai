import cls from './AvailableRole.module.css';
import { CareerRole } from '../CareersAvailableRoles';
import { Divider, Text, TextVariants } from 'shared/components';
import LocationIcon from 'shared/assets/icons/location-icon-blue.svg';
import ArrowIcon from 'shared/assets/icons/arrow-green-right.svg';
import { useContext } from 'react';
import { Context } from 'app/providers/ContextProvider';

export const AvailableRole = (props: CareerRole) => {
    const { icon, rate, location, description, title, applyLink } = props;
    const { isMobile } = useContext(Context);

    return (
        <li className={cls.role}>
            <div className={cls.icon}>
                {icon}
            </div>
            <div className={cls.generalInfoContainer}>
                <div className={cls.titleContainer}>
                    <Text classNamesProps={cls.title} tag="h3" variant={TextVariants.SUBTITLE_SMALL}>{title}</Text>
                    <div className={cls.locationContainer}>
                        <div className={cls.locationIcon}>
                            <LocationIcon/>
                        </div>
                        <span>{location}</span>
                    </div>
                </div>
                <Text tag="p" variant={TextVariants.DEFAULT} classNamesProps={cls.description}>{description}</Text>
            </div>
            <Divider horizontal={!isMobile}/>
            <div className={cls.rateInfoContainer}>
                <div className={cls.rateContainer}>
                    <Text tag="p" variant={TextVariants.PARAGRAPH_TITLE} classNamesProps={cls.rateBadge}>Yearly Rate:</Text>
                    <Text tag="p" variant={TextVariants.SUBTITLE_SMALL} classNamesProps={cls.rate}>{rate}</Text>
                </div>
                <a href={applyLink} className={cls.link}>
                    <span>Apply Now</span>
                    <div className={cls.locationIcon}>
                        <ArrowIcon/>
                    </div>
                </a>
            </div>
        </li>
    );
};