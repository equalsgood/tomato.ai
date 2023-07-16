import cls from './ComparePlans.module.css';
import { Button, ButtonVariants, NavigationLink, NavigationLinkVariants } from 'shared/components';
import ArrowRightIcon from 'shared/assets/icons/arrow-blue-right.svg';
import ArrowUpIcon from 'shared/assets/icons/arrow-blue-up.svg';
import classNames from 'classnames';
import React, { useState } from 'react';
import AvailableIcon from 'shared/assets/icons/plans/available.svg';
import UnavailableIcon from 'shared/assets/icons/plans/unavailable.svg';
import VipIcon from 'shared/assets/icons/plans/vip.svg';
import { RoutePaths } from 'app/providers/AppRouter';
import { Plans, requestDemoActions } from 'models/requestDemo';
import { useAppDispatch } from 'hooks';
import {
    ComparePlansMobileScroll
} from 'sections/pricing/ComparePlans/components/ComparePlansMobileScroll/ComparePlansMobileScroll';

export const ComparePlans = () => {
    const dispatch = useAppDispatch();
    const [open, setOpen] = useState(true);
    const [offset, setOffset] = useState(0);

    const clickLinkHandler = (plan: Plans) => {
        dispatch(requestDemoActions.changeSelectedPlan(plan));
    };

    const scrollHandler = () => {
        const sideMargin = 35;
        const tableWrapper = document.querySelector('#pricing-table-wrapper') as HTMLElement;
        const table = document.querySelector('#pricing-table') as HTMLElement;
        const { width: screenWidth } = tableWrapper.getBoundingClientRect();

        const tableWidth = table.getBoundingClientRect().width + (sideMargin * 2);
        const availableSpaceForScroll = Math.abs(screenWidth - tableWidth);
        const scrolledPart = Math.abs(table.getBoundingClientRect().left - sideMargin);

        const offset = scrolledPart * 100 / availableSpaceForScroll;
        setOffset((screenWidth - 120) * offset / screenWidth);
    };

    return (
        <section className={cls.compare}>
            <Button
                type="button"
                variant={ButtonVariants.ACTION_BLUE}
                text={open ? 'Hide' : 'Compare Plans'}
                classNamesProps={cls.btn}
                endIcon={open ? <ArrowUpIcon/> : <ArrowRightIcon/>}
                onClick={() => setOpen(prev => !prev)}
            />
            <div id="pricing-table-wrapper" onScroll={scrollHandler} className={classNames(cls.tableWrapper, { [cls.open]: open })}>
                <ComparePlansMobileScroll offset={offset}/>
                <table id="pricing-table" className={cls.table}>
                    <colgroup>
                        <col className={cls.benefitsCol}/>
                        <col className={cls.planCol}/>
                        <col className={cls.planCol}/>
                        <col className={classNames(cls.planCol, cls.goldCol)}/>
                        <col className={cls.planCol}/>
                    </colgroup>
                    <thead>
                        <tr className={cls.headerRow}>
                            <th scope="col" className={cls.benefitsTitle}>Benefits</th>
                            <th scope="col" className={cls.planTitle}>Bronze</th>
                            <th scope="col" className={cls.planTitle}>Silver</th>
                            <th scope="col" className={cls.planTitle}>Gold</th>
                            <th scope="col" className={cls.planTitle}>Platinum</th>
                        </tr>
                    </thead>
                    <tbody>
                        {benefitsConfig.map((section, sectionIndex) =>
                            <React.Fragment key={`${section.title}-table-section-${sectionIndex}`}>
                                <tr>
                                    <td className={cls.sectionTitle}>{section.title}</td>
                                    <td/>
                                    <td/>
                                    <td/>
                                    <td/>
                                </tr>
                                {section.benefits.map((benefit, index) =>
                                    <tr
                                        className={classNames({ [cls.lastBenefitRow]: section.benefits.length - 1 === index && benefitsConfig.length - 1 !== sectionIndex })}
                                        key={`${section.title}-${benefit.description}-${index}`}
                                    >
                                        <td className={cls.benefitDescription}>{benefit.description}</td>
                                        <td className={cls.benefitIcon}>
                                            {benefit.availability.bronze === 'available' && <AvailableIcon/>}
                                            {benefit.availability.bronze === 'unavailable' && <UnavailableIcon/>}
                                            {benefit.availability.bronze === 'vip' && <VipIcon/>}
                                        </td>
                                        <td className={cls.benefitIcon}>
                                            {benefit.availability.silver === 'available' && <AvailableIcon/>}
                                            {benefit.availability.silver === 'unavailable' && <UnavailableIcon/>}
                                            {benefit.availability.silver === 'vip' && <VipIcon/>}
                                        </td>
                                        <td className={cls.benefitIcon}>
                                            {benefit.availability.gold === 'available' && <AvailableIcon/>}
                                            {benefit.availability.gold === 'unavailable' && <UnavailableIcon/>}
                                            {benefit.availability.gold === 'vip' && <VipIcon/>}
                                        </td>
                                        <td className={cls.benefitIcon}>
                                            {benefit.availability.platinum === 'available' && <AvailableIcon/>}
                                            {benefit.availability.platinum === 'unavailable' && <UnavailableIcon/>}
                                            {benefit.availability.platinum === 'vip' && <VipIcon/>}
                                        </td>
                                    </tr>
                                )}
                            </React.Fragment>
                        )}
                        <tr>
                            <td/>
                            <td><NavigationLink onClick={() => clickLinkHandler(Plans.BRONZE)} text="Get a Demo" to={RoutePaths.REQUEST_DEMO} variant={NavigationLinkVariants.ACTION} classNamesProps={cls.getDemo} /></td>
                            <td><NavigationLink onClick={() => clickLinkHandler(Plans.SILVER)} text="Get a Demo" to={RoutePaths.REQUEST_DEMO} variant={NavigationLinkVariants.ACTION} classNamesProps={cls.getDemo} /></td>
                            <td><NavigationLink onClick={() => clickLinkHandler(Plans.GOLD)} text="Get a Demo" to={RoutePaths.REQUEST_DEMO} variant={NavigationLinkVariants.ACTION} classNamesProps={cls.getDemo} /></td>
                            <td><NavigationLink onClick={() => clickLinkHandler(Plans.PLATINUM)} text="Get a Demo" to={RoutePaths.REQUEST_DEMO} variant={NavigationLinkVariants.ACTION} classNamesProps={cls.getDemo} /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
};

type AvailabilityType = 'available' | 'unavailable' | 'vip';

interface Availability {
    bronze: AvailabilityType;
    silver: AvailabilityType;
    gold: AvailabilityType;
    platinum: AvailabilityType;
}

interface Benefit {
    description: string;
    availability: Availability;
}

interface BenefitsSection {
    title: string;
    benefits: Array<Benefit>;
}

const benefitsConfig: Array<BenefitsSection> = [
    {
        title: 'Some Title for this section',
        benefits: [
            {
                description: 'Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum Lorem ipsum dolor sit amet con',
                availability: {
                    bronze: 'available',
                    silver: 'available',
                    gold: 'available',
                    platinum: 'available',
                }
            },
            {
                description: 'Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum',
                availability: {
                    bronze: 'unavailable',
                    silver: 'available',
                    gold: 'available',
                    platinum: 'available',
                }
            },
            {
                description: 'Lorem ipsum dolor sit amet consectetur.',
                availability: {
                    bronze: 'unavailable',
                    silver: 'unavailable',
                    gold: 'available',
                    platinum: 'available',
                }
            },
            {
                description: 'Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum Lorem ipsum dolor sit amet consectetur.',
                availability: {
                    bronze: 'unavailable',
                    silver: 'unavailable',
                    gold: 'unavailable',
                    platinum: 'available',
                }
            },
            {
                description: 'Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum',
                availability: {
                    bronze: 'unavailable',
                    silver: 'unavailable',
                    gold: 'unavailable',
                    platinum: 'vip',
                }
            },
        ]
    },
    {
        title: 'Some Title for this section 2',
        benefits: [
            {
                description: 'Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum Lorem ipsum dolor sit amet con',
                availability: {
                    bronze: 'available',
                    silver: 'available',
                    gold: 'available',
                    platinum: 'available',
                }
            },
            {
                description: 'Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum',
                availability: {
                    bronze: 'unavailable',
                    silver: 'available',
                    gold: 'available',
                    platinum: 'available',
                }
            },
            {
                description: 'Lorem ipsum dolor sit amet consectetur.',
                availability: {
                    bronze: 'unavailable',
                    silver: 'unavailable',
                    gold: 'available',
                    platinum: 'available',
                }
            },
            {
                description: 'Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum Lorem ipsum dolor sit amet consectetur.',
                availability: {
                    bronze: 'unavailable',
                    silver: 'unavailable',
                    gold: 'unavailable',
                    platinum: 'vip',
                }
            },
        ]
    },
    {
        title: 'Some Title for this section 3',
        benefits: [
            {
                description: 'Lorem ipsum dolor sit amet consectetur. Ultrices vel quam aliquet dictum Lorem ipsum dolor sit amet con',
                availability: {
                    bronze: 'unavailable',
                    silver: 'unavailable',
                    gold: 'available',
                    platinum: 'available',
                }
            }
        ]
    }
];