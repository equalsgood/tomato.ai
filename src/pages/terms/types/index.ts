interface TermsContentParagraph {
    type: 'paragraph',
    text: string
}

interface TermsContentListItem {
    subtitle: string | undefined,
    itemText: string,
}

interface TermsContentList {
    type: 'list',
    title: string,
    listTitle: string | undefined,
    items: Array<TermsContentListItem>
}

interface TermsContentImage {
    type: 'image',
    alt: string,
    src: string
}

export interface TermsContentSection {
    sectionTitle: string;
    sectionId: string;
    sectionContent: Array<TermsContentParagraph | TermsContentImage | TermsContentList>
}

export interface TermsPageSchema {
    title: string;
    sections: Array<TermsContentSection>;
}