import { ComponentRendering, ImageField, LinkField, RichTextField, TextField } from '@sitecore-jss/sitecore-jss-nextjs'
import AppNavigation from '../../../my-jss-app/src/components/AppNavigation'
import FeatureHeading from '../../../my-jss-app/src/components/FeatureHeading'
import Footer from '../../../my-jss-app/src/components/Footer'
import Hero from '../../../my-jss-app/src/components/Hero'
import Tabs from '../../../my-jss-app/src/components/Tabs'
import React from 'react'

type HomePageProps = {
    homePageFields : {
        AppLogo: LinkField;
        Links: any;
    },
    footerFields: {
        rendering: ComponentRendering;
        fields: {
            FooterLogo: ImageField;
            Links: any;
            Socials: any;
        };
    },
    heroFields: {
        fields: {
            BackImage: ImageField;
            Buttons: any;
            Desc: RichTextField;
            Title: TextField;
        },
        rendering: ComponentRendering;
        params: any;
    },
    featureHeadingFields: {
        fields: {
            Title: TextField;
            Desc: RichTextField
          },
          params: any
    },
    tabsFields: {
        fields: {
            HeaderComponents: any;
            PanelComponents: any;
          },
          params: any;
    }
}

export default function HomePage(props: HomePageProps) {
  return (
    <>
        <AppNavigation fields={props.homePageFields}></AppNavigation>
        <Hero fields={props.heroFields.fields} rendering={props.heroFields.rendering} params={props.heroFields.params}></Hero>
        <FeatureHeading fields={props.featureHeadingFields.fields} params={props.featureHeadingFields.params}></FeatureHeading>
        <Tabs fields={props.tabsFields.fields} params={props.tabsFields.params}></Tabs>
        <Footer fields={props.footerFields.fields} rendering={props.footerFields.rendering}></Footer>
    </>
  )
}
