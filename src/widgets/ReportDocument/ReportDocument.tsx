import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { numberFormat } from 'shared/lib';
import { Font } from '@react-pdf/renderer';
import SatoshiBoldSrc from 'shared/fonts/satoshi/Satoshi-Bold.ttf';
import SatoshiLightSrc from 'shared/fonts/satoshi/Satoshi-Light.ttf';
import SatoshiMediumSrc from 'shared/fonts/satoshi/Satoshi-Medium.ttf';
import SatoshiRegularSrc from 'shared/fonts/satoshi/Satoshi-Regular.ttf';
import SatoshiHeavySrc from 'shared/fonts/satoshi/Satoshi-Variable.ttf';

Font.register({ family: 'Satoshi-Heavy', src: SatoshiHeavySrc });
Font.register({ family: 'SatoshiMedium', src: SatoshiMediumSrc });
Font.register({ family: 'Satoshi-Light', src: SatoshiLightSrc });


Font.register({ family: 'Satoshi-Regular', src: SatoshiRegularSrc });


Font.register({ family: 'Satoshi-Bold', src: SatoshiBoldSrc });

const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#fff',
        padding: 40
    },
    dataRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: '11px'
    },
    divider: {
        height: '1px',
        width: '100%',
        backgroundColor: '#E7E7E7',
        margin: '32px 0'
    },
    title: {
        fontFamily: 'Satoshi-Heavy',
        fontSize: '32px',
        color: '#161414',
        marginBottom: '19px'
    },
    value: {
        fontFamily: 'Satoshi-Heavy',
        fontSize: '23px',
        color: '#161414',
    },
    badge: {
        fontFamily: 'SatoshiMedium',
        fontSize: '19px',
        color: '#8A8A8A'
    },
    subtitle: {
        fontFamily: 'Satoshi-Heavy',
        fontSize: '24px',
        color: '#161414',
        marginBottom: '9px'
    },
    info: {
        fontFamily: 'Satoshi-Regular',
        fontSize: '16px',
        color: '#8A8A8A',
        marginBottom: '12px'
    },
    agentsType: {
        fontFamily: 'Satoshi-Heavy',
        fontSize: '20px',
        color: '#161414',
    },
    calculations: {
        fontFamily: 'Satoshi-Heavy',
        fontSize: '32px',
        color: '#161414',
    },
    secondSubtitle: {
        fontFamily: 'Satoshi-Heavy',
        fontSize: '20px',
        color: '#161414',
        margin: '30px 0 20px'
    },
    description: {
        fontFamily: 'SatoshiMedium',
        fontSize: '16px',
    },
    secondValue: {
        fontFamily: 'Satoshi-Heavy',
        fontSize: '16px',
        color: '#161414',
    },
    section: {
        marginBottom: '20px'
    },
    offset: {
        marginLeft: '16px'
    }
});

interface ReportDocumentProps {
    isBpo: boolean;
    isSupport: boolean;
    improvePercent: number;
    annualRoi: number,
    gross: number,
    savings: number,
    investment: number,
    grossSavings: number,
    agentsNumber: string,
    agentCost: string,
    trainingCost: string,
    csatIncrease: string,
    fcrIncrease: string,
    salesIncrease: string,
}

export const ReportDocument = (props: ReportDocumentProps) => {
    const { isBpo, isSupport, grossSavings, gross, savings, improvePercent, investment, agentsNumber, agentCost, trainingCost, csatIncrease, salesIncrease, fcrIncrease, annualRoi } = props;
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <Text style={styles.title}>RESULT SUMMARY</Text>
                <Text style={styles.subtitle}>Benefits</Text>
                { isSupport ?
                    <View>
                        <View style={styles.dataRow}>
                            <Text style={styles.badge}>CSAT Increase:</Text>
                            <Text style={[styles.value, { color: '#2B73FF' }]}>{`${improvePercent}%`}</Text>
                        </View>
                        <View style={styles.dataRow}>
                            <Text style={styles.badge}>FCR Increase:</Text>
                            <Text style={[styles.value, { color: '#2B73FF' }]}>{`${improvePercent}%`}</Text>
                        </View>
                        <View style={styles.dataRow}>
                            <Text style={styles.badge}>AHT Decrease:</Text>
                            <Text style={[styles.value, { color: '#FFB800' }]}>{`${improvePercent}%`}</Text>
                        </View>
                    </View> :
                    <View style={styles.dataRow}>
                        <Text style={styles.badge}>SALES Increase:</Text>
                        <Text style={[styles.value, { color: '#2B73FF' }]}>{`${improvePercent}%`}</Text>
                    </View>
                }
                <View style={styles.divider}/>
                <Text style={styles.subtitle}>Annual ROI</Text>
                { !isBpo && isSupport &&
                    <View style={styles.dataRow}>
                        <Text style={styles.badge}>GROSS SAVINGS:</Text>
                        <Text style={[styles.value, { color: `${grossSavings >= 0 ? '#00BD50' : '#F4363F'}` }]}>{`${numberFormat(grossSavings, true)}`}</Text>
                    </View>
                }
                <View style={styles.dataRow}>
                    <Text style={styles.badge}>GROSS REVENUE:</Text>
                    <Text style={[styles.value, { color: `${gross >= 0 ? '#00BD50' : '#F4363F'}` }]}>{`${numberFormat(gross, true)}`}</Text>
                </View>
                <View style={styles.dataRow}>
                    <Text style={styles.badge}>SAVINGS ON TRAINING:</Text>
                    <Text style={[styles.value, { color: '#00BD50' }]}>{`${numberFormat(savings, true)}`}</Text>
                </View>
                <View style={styles.dataRow}>
                    <Text style={styles.badge}>TOMATO.AI INVESTMENT</Text>
                    <Text style={[styles.value, { color: '#F4363F' }]}>{`-${numberFormat(investment)}`}</Text>
                </View>
                <View style={styles.divider}/>
                <Text style={styles.info}>
                    {isBpo ?
                        'The BPO ROI calculator uses your estimates of dollar value per 1% improvement across key performance indicators multiplied by the total percent gain estimated by Tomato.ai across accent, noise, and speech clarity, to estimate an overall ROI.'
                        :
                        'The Enterprise ROI calculator uses your estimates of dollar value per 1% improvement across key performance indicators multiplied by the total percent gain estimated by Tomato.ai across accent, noise, and speech clarity, to estimate an overall ROI.'
                    }
                </Text>
                <Text style={styles.info}>
                    {isBpo ?
                        'The estimated ROI provides an initial figure that can be further refined by running field tests to measure actual impact on metrics using the Tomato.ai solution with a statistically significant set of agents.'
                        :
                        'The estimated ROI provides an initial figure that can be further refined by running field tests to measure actual impact on metrics using the Tomato.ai solution with a statistically significant set of agents.'
                    }
                </Text>
            </Page>
            <Page size="A4" style={styles.page}>
                <Text style={styles.agentsType}>{ isSupport ? 'Support agents' : 'Sales agents' }</Text>
                <Text style={styles.calculations}>CALCULATIONS</Text>
                <Text style={styles.secondSubtitle}>GROSS REVENUE</Text>
                { isSupport ?
                    <>
                        <View style={styles.section}>
                            <Text style={styles.description}>= <Text style={styles.secondValue}>${fcrIncrease}</Text> Monthly Revenue per 1% FCR Increase</Text>
                            <Text style={[styles.description, styles.offset]}>X 12 Months</Text>
                            <Text style={[styles.description, styles.offset]}>X <Text style={[styles.secondValue, { color: '#2B73FF' }]}>{improvePercent}%</Text> FCR Increase</Text>
                        </View>
                        <View style={styles.section}>
                            <Text style={[styles.description, styles.offset]}>+ <Text style={styles.secondValue}>{`$${csatIncrease}`}</Text> Monthly Revenue per 1% CSAT Increase</Text>
                            <Text style={[styles.description, styles.offset]}>X 12 months</Text>
                            <Text style={[styles.description, styles.offset]}>X <Text style={[styles.secondValue, { color: '#2B73FF' }]}>{`${improvePercent}%`}</Text> CSAT Increase</Text>
                        </View>
                        <View style={styles.section}>
                            <Text style={[styles.description, styles.offset]}>{`${isBpo ? '-' : '+'}`} <Text style={styles.secondValue}>{agentsNumber}</Text> Agents</Text>
                            <Text style={[styles.description, styles.offset]}>X <Text style={styles.secondValue}>{`$${agentCost}`}</Text> Monthly Cost per Agent</Text>
                            <Text style={[styles.description, styles.offset]}>X 12 months</Text>
                            <Text style={[styles.description, styles.offset]}>X <Text style={[styles.secondValue, { color: '#FFB800' }]}>{`${improvePercent}%`}</Text> AHT Decrease</Text>
                        </View>
                    </> :
                    <View style={styles.section}>
                        <Text style={styles.description}>= <Text style={styles.secondValue}>{`$${salesIncrease}`}</Text> Monthly Revenue per 1% Sales Increase</Text>
                        <Text style={[styles.description, styles.offset]}>X 12 months</Text>
                        <Text style={[styles.description, styles.offset]}>X <Text style={[styles.secondValue, { color: '#2B73FF' }]}>{`${improvePercent}%`}</Text> {`${isBpo ? 'FCR' : 'Sales'} Increase`}</Text>
                        <Text></Text>
                    </View>
                }
                <Text style={styles.secondSubtitle}>SAVINGS ON TRAINING</Text>
                <View style={styles.section}>
                    <Text style={styles.description}>= <Text style={styles.secondValue}>{`$${trainingCost}`}</Text> Monthly Accent Training Cost</Text>
                    <Text style={[styles.description, styles.offset]}>X 12 months</Text>
                </View>
                <Text style={styles.secondSubtitle}>TOMATO.AI INVESTMENT</Text>
                <View style={styles.section}>
                    <Text style={styles.description}>= <Text style={styles.secondValue}>{`${agentsNumber}`}</Text> agents</Text>
                    <Text style={[styles.description, styles.offset]}>X $60 per agent monthly</Text>
                    <Text style={[styles.description, styles.offset]}>X 12 months</Text>
                </View>
            </Page>
        </Document>
    );
};