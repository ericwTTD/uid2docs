const sidebars = {
  docs: [
    'intro',



    {
      type: 'category',
      label: 'Overview Pages',
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      items: [
        'overviews/overview-publishers',
        'overviews/overview-advertisers',
        'overviews/overview-dsps',
        'overviews/overview-data-providers',
        'overviews/overview-operators-private',
      ],
    },



    {
      type: 'category',
      label: 'Getting Started',
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      items: [
        'getting-started/gs-account-setup',
        'getting-started/gs-api-keys',
        'getting-started/gs-auth',
        'getting-started/gs-environments',
        'getting-started/gs-api-using',
        'getting-started/gs-encryption-decryption',
        'getting-started/gs-normalization-encoding',
        'getting-started/gs-faqs',
        'getting-started/gs-sharing',
      ],
    },



    {
      type: 'category',
      label: 'UID2 Portal',
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      items: [
        'portal/portal-overview',
        'portal/portal-getting-started',
        'portal/sharing-permissions',
        'portal/participant-info',
        'portal/team-members',
        'portal/email-contacts',
      ],
    },



    {
      type: 'category',
      label: 'SDKs',
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      items: [
        'sdks/summary-sdks',
        'sdks/client-side-identity',
        'sdks/uid2-sdk-ref-java',
        'sdks/uid2-sdk-ref-python',
        'sdks/uid2-sdk-ref-csharp-dotnet',
        'sdks/uid2-sdk-ref-cplusplus',
        'sdks/uid2-sdk-ref-android',
        'sdks/uid2-sdk-ref-ios',
      ],
    },



    {
      type: 'category',
      label: 'Integration Guides',
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      items: [
        'guides/summary-guides',
        'guides/publisher-client-side',
        'guides/custom-publisher-integration',
        'guides/integration-prebid',
        'guides/snowflake_integration',
        'guides/dsp-guide',
        'guides/advertiser-dataprovider-guide',
        'guides/google-ss-integration',
        'guides/mobile-plugin-gma-android',
        'guides/mobile-plugin-gma-ios',
        'guides/operator-guide-aws-marketplace',
        'guides/operator-guide-azure-enclave',
        'guides/operator-guide-gcp-enclave',
      ],
    },



    'summary-doc-v2',
    

    {
      type: 'category',
      label: 'Endpoints (v2)',
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      items: [
        'endpoints/summary-endpoints',
        'endpoints/post-token-generate',
        'endpoints/post-token-validate',
        'endpoints/post-token-refresh',
        'endpoints/post-identity-buckets',
        'endpoints/post-identity-map',
      ],
    },



    {
      type: 'category',
      label: 'Workflows',
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      items: [
        'workflows/workflow-overview-supply-side',
        'workflows/workflow-overview-buy-side',
        'workflows/workflow-overview-3p-data-provider',
        'workflows/workflow-overview-opt-out',
      ],
    },



    {
      type: 'category',
      label: 'UID2 Sharing',
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      items: [
        'sharing/sharing-overview',
        'sharing/sharing-use-cases',
        'sharing/sharing-implementing',
        'sharing/sharing-best-practices',
        'sharing/sharing-bid-stream',
      ],
    },



    'ref-info/glossary-uid',



  ],
};
module.exports = sidebars;
