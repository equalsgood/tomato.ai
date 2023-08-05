interface TermsContentParagraph {
    type: 'paragraph',
    paragraphTitle?: string | undefined,
    text: string
}

interface TermsContentListItem {
    subtitle: string | undefined,
    itemText: string,
}

interface TermsContentList {
    type: 'list',
    listTitle: string | undefined,
    items: Array<TermsContentListItem>
}

interface TermsContentImage {
    type: 'image',
    alt: string,
    src: string,
    mobileSrc?: string,
    classNameProps?: string,
}

interface TermsDownloadLink {
    type: 'downloadLink',
    src: string,
    text: string
}

export interface TermsContentSection {
    sectionTitle: string;
    sectionId: string;
    sectionContent: Array<TermsContentParagraph | TermsContentImage | TermsContentList | TermsDownloadLink>
}

export interface TermsPageSchema {
    title: string;
    sections: Array<TermsContentSection>;
}