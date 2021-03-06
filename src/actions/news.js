const mockData = {
  status: 'ok',
  totalResults: 38,
  articles: [
    {
      source: {
        id: null,
        name: 'CNBC',
      },
      author: 'Holly Ellyatt',
      title: 'European markets head for lower open as omicron Covid variant fears return - CNBC',
      description: 'European stocks are expected to open lower on Thursday as concerns persist over the omicron Covid variant.',
      url: 'https://www.cnbc.com/2021/12/02/european-markets-troubled-as-omicron-covid-variant-fears-return.html',
      urlToImage: 'https://image.cnbcfm.com/api/v1/image/106982149-1638276010977-gettyimages-1236905877-AFP_9TN3CJ.jpeg?v=1638276079',
      publishedAt: '2021-12-02T05:45:35Z',
      content: "LONDON European stocks are expected to open lower on Thursday as concerns persist over the omicron Covid variant.\r\nThe U.K.'s FTSE index is seen opening 80 points lower at 7,086, Germany's DAX 176 po… [+1491 chars]",
    },
    {
      source: {
        id: null,
        name: 'ESPN',
      },
      author: 'Jeff Passan',
      title: 'MLB, MLBPA fail to reach new labor agreement; league in 1st lockout since 1990 - ESPN',
      description: "MLB has implemented a player lockout for the first time since 1990 after the league and players' union failed to reach a new labor contract agreement.",
      url: 'https://www.espn.com/mlb/story/_/id/32761620/mlb-mlbpa-fail-reach-new-labor-agreement-league-issues-lockout-first-1990',
      urlToImage: 'https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2014%2F0130%2Fmlb_g_baseball01jr_1296x729.jpg',
      publishedAt: '2021-12-02T05:01:00Z',
      content: "IRVING, Texas -- Major League Baseball locked out its players early Thursday morning, certifying the game's first work stoppage in more than a quarter-century after months of talks yielded little pro… [+7556 chars]",
    },
    {
      source: {
        id: 'the-washington-post',
        name: 'The Washington Post',
      },
      author: 'Cleve R. Wootson Jr., Tyler Pager',
      title: 'Symone Sanders, senior adviser to Vice President Harris, will leave post - The Washington Post',
      description: 'Sanders has been one of the most visible members of Harris’s team, which has been beset by disorder and internal tension.',
      url: 'https://www.washingtonpost.com/politics/2021/12/01/symone-sanders-senior-adviser-vice-president-harris-will-leave-post/',
      urlToImage: 'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/DSCCEIOVSVDEDO6DKXJ6JSUWZI&w=1440',
      publishedAt: '2021-12-02T04:41:15Z',
      content: 'Sanders did not return a call seeking comment. The departure was first reported by Politico.\r\nStory continues below advertisement\r\nSanderss departure is the second from the vice presidents office to … [+2805 chars]',
    },
    {
      source: {
        id: 'the-verge',
        name: 'The Verge',
      },
      author: 'Sam Byford',
      title: 'Apple may have a problem with iPhone demand as well as supply - The Verge',
      description: 'Apple is indicating to its iPhone 13 component suppliers that it may not order as many units as expected due to a drop in demand, Bloomberg reports. The company had already reportedly cut orders for the year by 10 million units.',
      url: 'https://www.theverge.com/2021/12/1/22813347/apple-iphone-demand-suppliers-chip-shortage-report',
      urlToImage: 'https://cdn.vox-cdn.com/thumbor/C-coMdnw4KomdDSBRJwsUkNsMJQ=/0x215:2002x1263/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22863273/vpavic_210916_4760_0240.jpg',
      publishedAt: '2021-12-02T04:06:47Z',
      content: 'The chip shortage might not explain everything\r\nPhoto by Vjeran Pavic / The Verge\r\nApple is indicating to its iPhone 13 component suppliers that it may not order as many units as expected due to a dr… [+1088 chars]',
    },
    {
      source: {
        id: 'cnn',
        name: 'CNN',
      },
      author: 'Alisha Ebrahimji and Christina Zdanowicz, CNN',
      title: 'A beloved football player and a senior with college scholarships among Michigan school shooting victims - CNN',
      description: 'Friends, family and an entire Michigan high school are grieving the loss of four students after a 15-year-old boy opened fire during the school day, killing four peers and shooting seven others on campus.',
      url: 'https://www.cnn.com/2021/12/01/us/michigan-oxford-high-school-shooting-victims-trnd/index.html',
      urlToImage: 'https://cdn.cnn.com/cnnnext/dam/assets/211130223819-05-oxford-school-shooting-vigil-1130-super-tease.jpg',
      publishedAt: '2021-12-02T03:04:00Z',
      content: '(CNN)Friends, family and an entire Michigan high school are grieving the loss of four students after a 15-year-old boy opened fire during the school day, killing four peers and shooting seven others … [+5855 chars]',
    },
    {
      source: {
        id: null,
        name: 'KSL.com',
      },
      author: 'Seth Borenstein, Associated Press',
      title: 'New dinosaur species from Chile had a unique slashing tail - KSL.com',
      description: 'Fossils found in Chile are from a strange-looking dog-sized dinosaur species that had a unique slashing tail weapon, scientists reported Wednesday.',
      url: 'https://www.ksl.com/article/50295392/new-dinosaur-species-from-chile-had-a-unique-slashing-tail',
      urlToImage: 'https://img.ksl.com/slc/2852/285274/28527464.jpeg?filter=kslv2/responsive_story_lg',
      publishedAt: '2021-12-02T03:01:21Z',
      content: 'Estimated read time: 2-3 minutes\r\nSANTIAGO, Chile Fossils found in Chile are from a strange-looking dog-sized dinosaur species that had a unique slashing tail weapon, scientists reported Wednesday.\r\n… [+2490 chars]',
    },
    {
      source: {
        id: 'cbs-news',
        name: 'CBS News',
      },
      author: 'Adam Adam',
      title: "Investigator in Republicans' Wisconsin 2020 election review sought to overturn Biden's victory - cbsnews.com",
      description: "Ron Heuer, one of the investigators in the election review ordered by the GOP-led Wisconsin Assembly, was involved in two failed lawsuits to overturn Biden's 2020 victory.",
      url: 'https://www.cbsnews.com/news/wisconsin-2020-election-republican-assembly-review/',
      urlToImage: 'https://cbsnews2.cbsistatic.com/hub/i/r/2020/11/04/f96569e4-5f54-48c9-88c4-13bbbd9e14c9/thumbnail/1200x630/3e6f47b0a93df9bebae47782eeb37806/gettyimages-1283769681.jpg',
      publishedAt: '2021-12-02T02:47:15Z',
      content: "The man leading a review of the 2020 election on behalf of Wisconsin Assembly Republicans, Michael Gableman, says he's not trying to overturn the election results, but he revealed Wednesday that one … [+7187 chars]",
    },
    {
      source: {
        id: null,
        name: 'Eonline.com',
      },
      author: 'Gabrielle Chung',
      title: "Here's Why Britney Spears' Fans Think She's Already Married to Sam Asghari - E! Online",
      description: 'Hold up, is Britney Spears secretly married? Fans asking that exact question after an eyebrow-raising comment from her fiancé, Sam Asghari.',
      url: 'https://www.eonline.com/news/1311806/heres-why-britney-spears-fans-think-shes-already-married-to-sam-asghari',
      urlToImage: 'https://akns-images.eonline.com/eol_images/Entire_Site/2021618/rs_1200x1200-210718175923-1200-Britney-Spears-Sam-Asghari-mp.jpg?fit=around%7C1080:1080&output-quality=90&crop=1080:1080;center,top',
      publishedAt: '2021-12-02T02:46:00Z',
      content: "Is that the sound of wedding bells?\r\nJust two months after announcing their engagement, Britney Spears and Sam Asghari are spurring speculation that they've secretly tied the knot. As the couple head… [+716 chars]",
    },
    {
      source: {
        id: 'reuters',
        name: 'Reuters',
      },
      author: null,
      title: 'Asian shares tick up but Omicron worries leave markets on edge - Reuters',
      description: 'Asian shares edged higher in choppy trading on Thursday, helped by advances in Chinese real estate shares, though fears about the Omicron variant of the new coronavirus capped gains regionally.',
      url: 'https://www.reuters.com/markets/europe/global-markets-wrapup-1-2021-12-02/',
      urlToImage: 'https://www.reuters.com/resizer/Icy5HAS5_VmXfj04xaDfIm2gTQg=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/RNWNFKBKW5MTRF3MLSSOOMRLW4.jpg',
      publishedAt: '2021-12-02T02:42:00Z',
      content: 'HONG KONG, Dec 2 (Reuters) - Asian shares edged higher in choppy trading on Thursday, helped by advances in Chinese real estate shares, though fears about the Omicron variant of the new coronavirus c… [+3632 chars]',
    },
    {
      source: {
        id: null,
        name: 'Rivals.com',
      },
      author: null,
      title: 'Tommy Rees turns down LSU, other Irish coaches to remain at Notre Dame - Irish Illustrated',
      description: 'The dominoes are falling for the Notre Dame Fighting Irish as offensive coordinator Tommy Rees will stay in South Bend.',
      url: 'https://notredame.rivals.com/news/tommy-rees-turns-down-lsu-will-remain-notre-dame-offensive-coordinator',
      urlToImage: 'https://images.rivals.com/image/upload/f_auto,q_auto,t_headline_primary/czcpjscy5qjo2jxqi1pv',
      publishedAt: '2021-12-02T02:14:02Z',
      content: "The dominoes are falling for Notre Dame. \r\nWednesday night, sources confirmed to BlueandGold.com that Marcus Freeman is expected to become Notre Dame's next head football coach. He'll be joined by so… [+2851 chars]",
    },
    {
      source: {
        id: 'fox-news',
        name: 'Fox News',
      },
      author: 'Julius Young',
      title: 'Author Alice Sebold’s memoir ‘Lucky’ pulled from shelves following exoneration of man convicted of 1981 rape - Fox News',
      description: 'The publishers for Alice Sebold’s memoir, "Lucky," have pulled the title from shelves after a man was exonerated last week of the 1981 rape that was the basis for her book, Fox News has confirmed.',
      url: 'https://www.foxnews.com/entertainment/author-alice-sebold-memoir-lucky-pulled-exoneration-rape',
      urlToImage: 'https://static.foxnews.com/foxnews.com/content/uploads/2021/11/AP213346617082691.jpg',
      publishedAt: '2021-12-02T02:03:08Z',
      content: 'The publishers for Alice Sebolds memoir, "Lucky," have pulled the title from shelves after a man was exonerated last week of the 1981 rape that was the basis for her book, Fox News has confirmed. \r\n"… [+4410 chars]',
    },
    {
      source: {
        id: 'reuters',
        name: 'Reuters',
      },
      author: null,
      title: 'S.Korea hits new COVID-19 record, halts quarantine exemptions to block Omicron - Reuters',
      description: "South Korea's daily coronavirus case numbers rose to a new high on Thursday, as authorities halted quarantine exemptions for fully vaccinated inbound travellers for two weeks in a bid to fend off the <a href=\"https://www.reuters.com/world/global-spread-omicro…",
      url: 'https://www.reuters.com/business/healthcare-pharmaceuticals/skorea-hits-new-covid-19-record-halts-quarantine-exemptions-block-omicron-2021-12-02/',
      urlToImage: 'https://www.reuters.com/resizer/-fYZrtlpEIV540001b8BwUmMn1s=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/RDFODGZE7JOXVJTA5PQMUSJJ5Q.jpg',
      publishedAt: '2021-12-02T01:49:00Z',
      content: "SEOUL, Dec 2 (Reuters) - South Korea's daily coronavirus case numbers rose to a new high on Thursday, as authorities halted quarantine exemptions for fully vaccinated inbound travellers for two weeks… [+2099 chars]",
    },
    {
      source: {
        id: 'associated-press',
        name: 'Associated Press',
      },
      author: 'Christina Larson',
      title: 'Fossil footprints puzzle scientists: Bear or ancient human? - Associated Press',
      description: 'WASHINGTON (AP) — Prehistoric footprints that have puzzled scientists since the 1970s are getting a second look: Were they left by extinct animals or by human ancestors?  When famed paleontologist Mary Leakey first uncovered the footprints in Tanzania 40 year…',
      url: 'https://apnews.com/article/science-fossils-animals-bears-bac780ed3c7c87171ed80b3dcd093f0f',
      urlToImage: 'https://storage.googleapis.com/afs-prod/media/29f2983051e34f689f98c96ef3c729af/1944.jpeg',
      publishedAt: '2021-12-02T01:42:23Z',
      content: 'WASHINGTON (AP) Prehistoric footprints that have puzzled scientists since the 1970s are getting a second look: Were they left by extinct animals or by human ancestors? \r\nWhen famed paleontologist Mar… [+3177 chars]',
    },
    {
      source: {
        id: 'reuters',
        name: 'Reuters',
      },
      author: null,
      title: 'Supreme Court conservatives appear willing to gut abortion rights - Reuters',
      description: 'Conservative U.S. Supreme Court justices on Wednesday signaled a willingness to dramatically curtail abortion rights in America and perhaps overturn the landmark 1973 Roe v. Wade ruling that legalized the procedure nationwide as they indicated they would upho…',
      url: 'https://www.reuters.com/world/us/us-supreme-court-consider-rolling-back-abortion-rights-2021-12-01/',
      urlToImage: 'https://www.reuters.com/resizer/PPtUQBO_55IQKCNEdtvVuJLEYw0=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/2ZF2FYJOBRIXNBXDVP5XPIJE2U.jpg',
      publishedAt: '2021-12-02T01:31:00Z',
      content: 'WASHINGTON, Dec 1 (Reuters) - Conservative U.S. Supreme Court justices on Wednesday signaled a willingness to dramatically curtail abortion rights in America and perhaps overturn the landmark 1973 Ro… [+6439 chars]',
    },
    {
      source: {
        id: null,
        name: 'New York Post',
      },
      author: 'Steven Nelson',
      title: "Biden scorns Trump, Bush on World AIDS Day despite GOP presidents' efforts - New York Post",
      description: 'President Biden knocked his predecessor Donald Trump in a World AIDS Day speech and claimed House Speaker Nancy Pelosi got “even” President George W. Bush to care about HIV/AIDS.',
      url: 'https://nypost.com/2021/12/01/biden-scorns-trump-bush-on-world-aids-day-despite-gop-presidents-efforts/',
      urlToImage: 'https://nypost.com/wp-content/uploads/sites/2/2021/12/biden-aids.jpg?quality=90&strip=all&w=1024',
      publishedAt: '2021-12-02T01:02:00Z',
      content: 'WASHINGTON President Biden on Wednesday knocked his predecessor Donald Trump in a World AIDS Day speech and claimed House Speaker Nancy Pelosi got “even” President George W. Bush to care about HIV/AI… [+3810 chars]',
    },
    {
      source: {
        id: null,
        name: 'Pro Football Network',
      },
      author: null,
      title: "NFL RB Start 'Em, Sit 'Em Week 13: Boston Scott to take flight, Damien Harris a blight, Devonta Freeman is alright - Pro Football Network",
      description: "With the fantasy regular season nearing the end, which RBs appear on the list of the top start 'em and sit 'em options for Week 13?",
      url: 'https://www.profootballnetwork.com/nfl-fantasy-football-start-em-sit-em-rb-2021-nflwk-13/',
      urlToImage: 'https://www.profootballnetwork.com/wp-content/uploads/2021/12/RB-Start_Sit-2.jpg',
      publishedAt: '2021-12-02T01:00:19Z',
      content: 'Injuries and bye weeks continue to cause lineup issues, forcing fantasy football managers to face even further difficult lineup decisions. Lets take a look at our Week 13 RB start em and sit em plays… [+5075 chars]',
    },
    {
      source: {
        id: null,
        name: 'Yahoo Entertainment',
      },
      author: 'Marquise Francis',
      title: "Border closures won't do much to stop Omicron, expert says, and could be counterproductive - Yahoo News",
      description: 'President Biden’s decision late last week to ban travel from eight southern African countries is unlikely to curb the spread of the Omicron coronavirus...',
      url: 'https://news.yahoo.com/border-closures-wont-do-much-to-stop-omicron-expert-says-and-could-be-counterproductive-003040416.html',
      urlToImage: 'https://s.yimg.com/ny/api/res/1.2/D7QOhadvWBc7zS1_f7Ljvg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://s.yimg.com/os/creatr-uploaded-images/2021-12/bdfd9650-52f9-11ec-bafd-19afb0a48b37',
      publishedAt: '2021-12-02T00:32:00Z',
      content: 'President Bidens decision late last week to ban travel from eight southern African countries is unlikely to curb the spread of the Omicron coronavirus variant, an epidemiologist warns, and could even… [+8192 chars]',
    },
    {
      source: {
        id: null,
        name: 'The Guardian',
      },
      author: 'Hugo Lowell',
      title: 'Capitol attack panel recommends contempt prosecution for Jeffrey Clark - The Guardian',
      description: 'Former Trump DoJ official punished for refusal to comply with subpoena but gets last chance after 11th-hour statement',
      url: 'https://amp.theguardian.com/us-news/2021/dec/01/capital-attack-committee-jeffrey-clark-trump-doj',
      urlToImage: 'https://i.guim.co.uk/img/media/6e13112f668dc8cee65d9beaac9d7b8f8ee65f43/0_200_6000_3600/master/6000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=4f1fbdc3e482a570e4519ef683eb4da2',
      publishedAt: '2021-12-02T00:27:00Z',
      content: 'The House select committee investigating the Capitol attack recommended on Wednesday the criminal prosecution of the former Trump justice department official Jeffrey Clark, over his refusal to comply… [+7657 chars]',
    },
    {
      source: {
        id: null,
        name: 'KTRK-TV',
      },
      author: 'Roxie Bustamante',
      title: 'Minorities facing higher AIDS transmission rates especially in Houston - KTRK-TV',
      description: 'A vigil was held at Sam Houston Park for World AIDS Day to honor those who have died due to HIV-related illness since the start of the epidemic.',
      url: 'https://abc13.com/houston-world-aids-day-vigil-what-is-about/11290617/',
      urlToImage: 'https://cdn.abcotvs.com/dip/images/11290491_120121-ktrk-ewn-430pm-RBU-world-aids-day-WED-matt-vid.jpg?w=1600',
      publishedAt: '2021-12-02T00:15:40Z',
      content: 'HOUSTON, Texas (KTRK) -- A vigil was held at Sam Houston Park for World AIDS Day to honor the 33 million people who have died due to HIV-related illness since the start of the HIV Epidemic.The Housto… [+3374 chars]',
    },
    {
      source: {
        id: null,
        name: 'MyMotherLode.com',
      },
      author: 'Sabrina Biehl',
      title: '3 New Covid Deaths, 11 New Cases In Tuolumne And Calaveras County - MyMotherLode.com',
      description: 'Tuolumne County Public Health reports three new deaths',
      url: 'https://www.mymotherlode.com/news/local/2158181/3-new-covid-deaths-11-new-cases-in-tuolumne-county.html',
      urlToImage: 'https://www.mymotherlode.com/wp-content/uploads/2021/12/episodedateTC12_1_2021.png',
      publishedAt: '2021-12-02T00:06:27Z',
      content: 'Tuolumne County Public Health reports three new deaths due to Covid, all men who were unvaccinated, one in his 50s, one in his 60s, and a one in his 70s.\r\nThere are 11 new Covid cases since yesterday… [+5505 chars]',
    },
  ],
};
