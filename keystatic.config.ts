import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
  storage:
    process.env.NODE_ENV === 'development'
      ? { kind: 'local' }
      : {
        kind: 'github',
        repo: 'dev-coding-for-fun/tabvar-keystatic',
      },
  cloud: {
    project: 'tabvar/tabvar-keystatic',
  },
  singletons: {
    home: singleton({
      label: 'Home Page',
      path: 'src/content/pages/home',
      format: 'json',
      schema: {
        heroKicker: fields.text({
          label: 'Hero Kicker',
          defaultValue: 'Stewarding Bow Valley Rock Since 1994',
        }),
        heroHeadline: fields.text({
          label: 'Hero Headline',
          defaultValue: 'Safe Bolts. Trusted Anchors.',
        }),
        heroHeadlineHighlight: fields.text({
          label: 'Headline Highlight (Green)',
          defaultValue: 'Enduring Lines.',
        }),
        heroSubheadline: fields.text({
          label: 'Hero Subheadline',
          multiline: true,
          defaultValue:
            'TABVAR distributes 100% of community donations into marine-grade 316 stainless steel hardware, glue-in anchors, and retrofitting for rock, ice, and mixed climbs across the Canadian Rockies.',
        }),
        heroStats: fields.array(
          fields.object({
            number: fields.text({ label: 'Stat Number (e.g. $180k+)' }),
            label: fields.text({ label: 'Stat Label' }),
          }),
          {
            label: 'Hero Stats Strip',
            itemLabel: (props) => `${props.fields.number.value} — ${props.fields.label.value}`,
          }
        ),
        heroImage: fields.image({
          label: 'Hero Photo',
          directory: 'public/images/photos',
          publicPath: '/images/photos/',
        }),
        heroImageAlt: fields.text({
          label: 'Hero Photo Alt Text',
          defaultValue: 'Brian Spear on the First Ascent of Gift Card in Grotto Canyon',
        }),
        heroImageTag: fields.text({
          label: 'Hero Photo Tag',
          defaultValue: 'First Ascent • Grotto Canyon',
        }),
        heroImageCaption: fields.text({
          label: 'Hero Photo Caption Overlay',
          multiline: true,
          defaultValue:
            'Brian Spear on the FA of Gift Card, protected by TABVAR-funded modern 316 stainless hardware.',
        }),
        pillars: fields.array(
          fields.object({
            icon: fields.text({ label: 'Icon / Emoji' }),
            title: fields.text({ label: 'Title' }),
            description: fields.text({ label: 'Description', multiline: true }),
          }),
          {
            label: 'Ecosystem Pillars',
            itemLabel: (props) => props.fields.title.value,
          }
        ),
        stewardshipCards: fields.array(
          fields.object({
            image: fields.image({
              label: 'Photo',
              directory: 'public/images/photos',
              publicPath: '/images/photos/',
            }),
            badge: fields.text({ label: 'Badge' }),
            title: fields.text({ label: 'Title' }),
            description: fields.text({ label: 'Description', multiline: true }),
          }),
          {
            label: 'Bow Valley Crags in Action Cards',
            itemLabel: (props) => props.fields.title.value,
          }
        ),
      },
    }),

    about: singleton({
      label: 'About Page',
      path: 'src/content/pages/about',
      format: 'json',
      schema: {
        heroBadge: fields.text({
          label: 'Hero Badge',
          defaultValue: 'Our Mandate & Stewardship',
        }),
        heroTitle: fields.text({
          label: 'Hero Title',
          defaultValue: 'About TABVAR',
        }),
        heroDescription: fields.text({
          label: 'Hero Description',
          multiline: true,
          defaultValue:
            'Founded in 1994, The Association of Bow Valley Area Rockclimbers is a 100% volunteer-run registered non-profit dedicated to funding fixed hardware, anchors, and crag maintenance throughout the Canadian Rockies.',
        }),
        mandateCards: fields.array(
          fields.object({
            icon: fields.text({ label: 'Icon / Emoji' }),
            title: fields.text({ label: 'Title' }),
            description: fields.text({ label: 'Description', multiline: true }),
          }),
          {
            label: 'Purpose & Impact Cards',
            itemLabel: (props) => props.fields.title.value,
          }
        ),
        retroboltingImage: fields.image({
          label: 'Retrobolting Banner Photo',
          directory: 'public/images/photos',
          publicPath: '/images/photos/',
        }),
        retroboltingTag: fields.text({
          label: 'Retrobolting Banner Tag',
          defaultValue: 'Community Retrobolting',
        }),
        retroboltingCaption: fields.text({
          label: 'Retrobolting Banner Caption',
          defaultValue:
            'TABVAR volunteers and active route developers collaborating on anchor upgrades in Grotto Canyon.',
        }),
        memorialTag: fields.text({
          label: 'Memorial Tag',
          defaultValue: 'In Memoriam',
        }),
        memorialTitle: fields.text({
          label: 'Memorial Title',
          defaultValue: 'Jon W. Jones (1950 – 2022)',
        }),
        memorialRole: fields.text({
          label: 'Memorial Role',
          defaultValue: 'Founder & Past President',
        }),
        memorialBio: fields.array(fields.text({ label: 'Paragraph', multiline: true }), {
          label: 'Memorial Bio Paragraphs',
          itemLabel: (props) => (props.value ? props.value.slice(0, 40) + '...' : 'Paragraph'),
        }),
        clinicImage: fields.image({
          label: 'Clinic Feature Photo',
          directory: 'public/images/photos',
          publicPath: '/images/photos/',
        }),
        clinicCaption: fields.text({
          label: 'Clinic Feature Caption',
          multiline: true,
          defaultValue:
            'TABVAR Volunteer Leadership & Routebuilder Community: Board directors and Bow Valley developers gather annually to align on modern glue-in bolting, torque mechanics, and crag conservation.',
        }),
        board: fields.array(
          fields.object({
            name: fields.text({ label: 'Name' }),
            role: fields.text({ label: 'Role' }),
          }),
          {
            label: 'Board of Directors',
            itemLabel: (props) => `${props.fields.name.value} — ${props.fields.role.value}`,
          }
        ),
        annualReports: fields.array(
          fields.object({
            year: fields.text({ label: 'Year' }),
            label: fields.text({ label: 'Report Label' }),
            url: fields.url({ label: 'Download URL / Link' }),
          }),
          {
            label: 'Annual Reports Archive',
            itemLabel: (props) => `${props.fields.year.value}: ${props.fields.label.value}`,
          }
        ),
      },
    }),

    donate: singleton({
      label: 'Donate Page & Tiers',
      path: 'src/content/pages/donate',
      format: 'json',
      schema: {
        heroBadge: fields.text({
          label: 'Hero Badge',
          defaultValue: 'Climb It Forward',
        }),
        heroTitle: fields.text({
          label: 'Hero Title',
          defaultValue: 'Support Bow Valley Climbing',
        }),
        heroDescription: fields.text({
          label: 'Hero Description',
          multiline: true,
          defaultValue:
            'TABVAR is a 100% volunteer-run registered non-profit. Every dollar received (outside of basic insurance and bank fees) directly purchases 316 marine-grade stainless steel bolts, anchors, chains, and drill supplies for local crags.',
        }),
        impactCards: fields.array(
          fields.object({
            image: fields.image({
              label: 'Photo',
              directory: 'public/images/photos',
              publicPath: '/images/photos/',
            }),
            badge: fields.text({ label: 'Badge' }),
            title: fields.text({ label: 'Title' }),
            description: fields.text({ label: 'Description', multiline: true }),
          }),
          {
            label: 'Impact Showcase Cards',
            itemLabel: (props) => props.fields.title.value,
          }
        ),
        tiers: fields.array(
          fields.object({
            name: fields.text({ label: 'Tier Name' }),
            amount: fields.text({ label: 'Amount (e.g. $40)' }),
            cadence: fields.text({ label: 'Cadence (e.g. per year)' }),
            description: fields.text({ label: 'Description', multiline: true }),
            highlighted: fields.checkbox({ label: 'Highlight as Featured Tier' }),
            badge: fields.text({ label: 'Badge Tag (optional)' }),
            ctaLabel: fields.text({ label: 'Button Label' }),
            ctaUrl: fields.text({ label: 'Stripe or Donation Link' }),
            features: fields.array(fields.text({ label: 'Feature' }), {
              label: 'Perks / Features Included',
              itemLabel: (props) => props.value,
            }),
          }),
          {
            label: 'Donor Membership Tiers',
            itemLabel: (props) => `${props.fields.name.value} (${props.fields.amount.value})`,
          }
        ),
        retailRules: fields.array(
          fields.object({
            retailer: fields.text({ label: 'Retailer Name' }),
            terms: fields.text({ label: 'Perk Terms & Conditions', multiline: true }),
          }),
          {
            label: 'Retail Partner Discount Conditions',
            itemLabel: (props) => props.fields.retailer.value,
          }
        ),
      },
    }),

    sponsors: singleton({
      label: 'Sponsors & Partners',
      path: 'src/content/pages/sponsors',
      format: 'json',
      schema: {
        pillars: fields.array(
          fields.object({
            name: fields.text({ label: 'Sponsor Name' }),
            shortName: fields.text({ label: 'Short Name' }),
            role: fields.text({ label: 'Role / Title' }),
            detail: fields.text({ label: 'Contribution Details' }),
            url: fields.text({ label: 'Website URL (optional)' }),
          }),
          {
            label: 'Pillar Sponsors',
            itemLabel: (props) => props.fields.name.value,
          }
        ),
        technical: fields.array(
          fields.object({
            name: fields.text({ label: 'Technical Partner Name' }),
            detail: fields.text({ label: 'Detail' }),
            url: fields.text({ label: 'Website URL (optional)' }),
          }),
          {
            label: 'Technical & Hardware Partners',
            itemLabel: (props) => props.fields.name.value,
          }
        ),
        retailPerks: fields.array(
          fields.object({
            name: fields.text({ label: 'Retailer Name' }),
            perk: fields.text({ label: 'Perk Offer' }),
          }),
          {
            label: 'Retail Perks',
            itemLabel: (props) => props.fields.name.value,
          }
        ),
        community: fields.array(fields.text({ label: 'Supporter Name' }), {
          label: 'Community Supporters & Gyms',
          itemLabel: (props) => props.value,
        }),
      },
    }),

    developers: singleton({
      label: 'Route Developers Hub',
      path: 'src/content/pages/developers',
      format: 'json',
      schema: {
        heroBadge: fields.text({
          label: 'Hero Badge',
          defaultValue: 'Bow Valley Routebuilder Portal',
        }),
        heroTitle: fields.text({
          label: 'Hero Title',
          defaultValue: 'Route Developers & Retrofitters Hub',
        }),
        heroDescription: fields.text({
          label: 'Hero Description',
          multiline: true,
          defaultValue:
            'TABVAR has supported Bow Valley route developers and retrofitters since 1994. Here you will find our funding caps, claim spreadsheets, bulk hardware order schedules, and 316 stainless steel standards.',
        }),
        seasonalBanner: fields.object({
          mode: fields.select({
            label: 'Banner Mode',
            options: [
              { label: 'Auto (by calendar month)', value: 'auto' },
              { label: 'Force Bulk Order Open', value: 'bulk' },
              { label: 'Force Claims Season Open', value: 'claims' },
              { label: 'Force Active Cragging Info', value: 'info' },
            ],
            defaultValue: 'auto',
          }),
          bulkDeadlineText: fields.text({
            label: 'Bulk Order Deadline Text',
            multiline: true,
            defaultValue:
              'Bulk hardware orders are processed annually in winter. Deadline for orders is 16:00 MST on Tuesday, January 20. Delivery arrives for spring cragging.',
          }),
          claimsDeadlineText: fields.text({
            label: 'Claims Deadline Text',
            multiline: true,
            defaultValue:
              'New route and retrofit reimbursement claims for this season are due by August 1. Ensure your claim includes topos and approach beta.',
          }),
        }),
        fundingCaps: fields.array(
          fields.object({
            amount: fields.text({ label: 'Cap Amount (e.g. $1,500)' }),
            type: fields.text({ label: 'Hardware Type' }),
            description: fields.text({ label: 'Description', multiline: true }),
            highlighted: fields.checkbox({ label: 'Highlight Card' }),
          }),
          {
            label: 'Funding Caps',
            itemLabel: (props) => `${props.fields.type.value}: ${props.fields.amount.value}`,
          }
        ),
        actionCardImage: fields.image({
          label: 'Routebuilder Action Photo',
          directory: 'public/images/photos',
          publicPath: '/images/photos/',
        }),
        actionCardTag: fields.text({
          label: 'Action Card Tag',
          defaultValue: 'Community Routebuilders',
        }),
        actionCardTitle: fields.text({
          label: 'Action Card Title',
          defaultValue: 'Equipping Bow Valley Lines Since 1994',
        }),
        actionCardDescription: fields.text({
          label: 'Action Card Description',
          multiline: true,
          defaultValue:
            'Active route developers volunteer hundreds of hours cleaning loose limestone, establishing classic lines, and installing certified hardware. TABVAR covers 100% of qualified hardware costs so climbers can enjoy safe, enduring routes.',
        }),
        claimSteps: fields.array(
          fields.object({
            title: fields.text({ label: 'Step Title' }),
            description: fields.text({ label: 'Instructions', multiline: true }),
          }),
          {
            label: 'Claim Submission Steps',
            itemLabel: (props) => props.fields.title.value,
          }
        ),
        bulkOrderImage: fields.image({
          label: 'Bulk Order Photo',
          directory: 'public/images/photos',
          publicPath: '/images/photos/',
        }),
        bulkOrderTitle: fields.text({
          label: 'Bulk Order Card Title',
          defaultValue: 'Wholesale Consolidation for Maximum Value',
        }),
        bulkOrderDescription: fields.text({
          label: 'Bulk Order Card Description',
          multiline: true,
          defaultValue:
            'TABVAR pools community orders directly with certified manufacturers, ensuring local route builders get top-tier 316 marine-grade hardware at unbeatable bulk rates before spring cragging begins.',
        }),
      },
    }),

    contact: singleton({
      label: 'Contact Page',
      path: 'src/content/pages/contact',
      format: 'json',
      schema: {
        heroBadge: fields.text({
          label: 'Hero Badge',
          defaultValue: 'Volunteer Community Board',
        }),
        heroTitle: fields.text({
          label: 'Hero Title',
          defaultValue: 'Get in Touch',
        }),
        heroDescription: fields.text({
          label: 'Hero Description',
          multiline: true,
          defaultValue:
            'Have questions about route claims, bulk hardware orders, donations, or corporate sponsorships? Reach out to our volunteer board members below.',
        }),
        methods: fields.array(
          fields.object({
            icon: fields.text({ label: 'Icon / Emoji' }),
            title: fields.text({ label: 'Title / Subject' }),
            description: fields.text({ label: 'Description', multiline: true }),
            email: fields.text({ label: 'Contact Email' }),
          }),
          {
            label: 'Board Inquiry Channels',
            itemLabel: (props) => `${props.fields.title.value} (${props.fields.email.value})`,
          }
        ),
      },
    }),
  },

  collections: {
    posts: collection({
      label: 'Posts',
      slugField: 'title',
      path: 'src/content/posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        date: fields.date({ label: 'Published Date' }),
        summary: fields.text({ label: 'Summary', multiline: true }),
        coverImage: fields.image({
          label: 'Cover Photo',
          directory: 'public/images/photos',
          publicPath: '/images/photos/',
        }),
        coverImageAlt: fields.text({ label: 'Cover Photo Alt Text' }),
        content: fields.markdoc({
          label: 'Content',
          options: {
            image: {
              directory: 'src/assets/images/posts',
              publicPath: '../../assets/images/posts/',
            },
          },
        }),
      },
    }),
  },
});

