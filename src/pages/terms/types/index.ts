interface TermsContentParagraph {
    type: 'paragraph',
    text: string
}

interface TermsContentImage {
    type: 'image',
    alt: string,
    src: string
}

interface TermsContentSection {
    sectionTitle: string;
    sectionId: string;
    sectionContent: Array<TermsContentParagraph | TermsContentImage>
}

export interface TermsPageSchema {
    title: string;
    sections: Array<TermsContentSection>;
}