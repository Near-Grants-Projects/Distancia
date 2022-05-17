# Distancia
 Blockchain Fitness and Ads-tech application built on Near Blockchain Protocol
Distancia Project SRS
https://distancia.africa/
Introduction
Distancia is Pan-African decentralized social audiovisual advert platform built on Near protocol with verifiable metrics rewarding viewers for staying fit through walking, jogging, and cycling. It provides companies with decentralized and verifiable advertising services. The platform by virtue of feature and functionality can be classified as a blockchain fitness app that aligns user’s predetermined interests with target ads and rewards them for keeping fit. It tracks users' activities through mobile phone app sensors designed to measure burned calories (distance covered) after fueling with fuel points which are then converted into spendable tokens. As a complimentary service, it integrates a social media feature allowing users to share memories, likes and reshare contents among others.
The advertising Industry needs solutions like this that restores the trust in digital platforms and provides adequate results on a budget well spent. Client data isn’t stored or collected for use by the platform. Citizens need to be able to select the range of industries they are interested in on signing up, this is the highest level of personalization which by design is initiated and effected by the client and can be removed or changed anytime he/she wishes. Companies need to be able to derive the highest benefit from every budget knowing it is targeted at prospective customers and chargeable rates are powered by smart contracts.

Problem Statement:
People hardly watch ads, especially when they can skip it. Yet, advertisers set aside the funds to advertise anyways. This happens in most cases with limited deliveries and no metrics other than amount of clicks which can’t truly be verified. The African advertising industry is a multi-billion dollar setup and it's constantly experiencing a relatively upward trend in growth. Just like many industries wherever money is involved, there is always an avenue for fraud. In the digital age, it is a shame that digital advertising is classed as one of the biggest frauds in history when in fact it should be the most effective and transparent. 
 
Solution explained:
The platform proposes to reward people (potential customers) for viewing adverts and also sharing adverts. So the funds allocated to advertisement are monitored not by automated views, but an incentive model that rewards people with a token for viewing and for keeping fit. These incentive tokens are only provided upon successful completion of the viewing for which the contract executes and releases the fuel token to be used for jogging, moving etc. The second phase of the contract kicks in when the user then converts the fuels in motion to burn calories and then executes to release the spendable token once the milestone is completed. A reward for keeping fit.

Customers and General Users:
The platform offers three distinct services and hence has a wide customer base. For the advertisement services, its customers would be the corporates, businesses and startups requiring marketing services. For the fitness reward system, its customers would be anyone and everyone interested in getting fit and earning tokens which covers a wide age range. For its final services of providing charity donations and gifting, its range of customers include students looking for scholarships, orphanages among groups looking for assistance.
 



Platform Functionality
Users should be able to sign-up with little details, steps and generate a wallet address. 
Mobile phone specs are important:
Phone is either equipped with accelerometer sensor or
Enhanced by gadgets such as fitbit among other fitness gadgets connected to mobiles.
Users should be able to select their interests when signing up on the app with regards to ads they will love to see.
Users should be able to trade fuel tokens in exchange for reward tokens on the marketplace
Users should be able to donate reward tokens on the platform to various available or listed causes or simply convert to Fiats via integrated exchange. 
Platform  fees are to be deducted from each transaction remitted into platform addresses by the clients seeking advertisement.
Product’s end users.
As described above, Product is a social fitness app on the blockchain, rewarding people for keeping fit and providing advertising services to clients:
Athletes
Sign up.
Watch advertisements
Post contents and share (Video and Photos)
Track their fitness program.
Get rewarded with tokens after completing their fitness milestones.
Convert tokens to fiat or able to donate to any of the listed causes. 
Corporate entities:
Platform use:
Platform allows companies to upload adverts videos and set fees for each completed view.
Companies are able to see real time reports on their performance and see who watches their adverts sourced from where the contracts distribute the locked funds? 
Companies are also able to donate reward tokens to listed causes.
Listed recipients (Charity and others).

Platform Use:
Organizations and individuals are able to view all contents posted.
Organizations and individuals are able to create sponsorship requests for different causes.
They are able to receive donations straight to their wallet to fund their needs.
They are able to exchange on the DEX to different currencies.

Technical Implementation
After the fuel token has been released from the first contract upon watching the video, then comes this stage where the Oracle is needed. 
User initiates the contract by initiating his fitness button which gives him a milestone needed to complete to successfully convert the fuel into reward tokens. 
User’s device feeds the Oracle/SQL database with his/her fitness data sourced from the sensor. Upon completion, user requests reward.
Reward request triggers the near smart contract to request fitness outcome from the oracle contract which obtains data from the off-chain database. The Oracle returns fitness outcomes from the DB to the smart contract. Smart contract then releases equivalent or earned reward to the user’s account. 
Users can then trade, send or spend the token. Take note, these tokens are off-chain and they are sourced originally from the advert fees. The earlier coins are platform generated, on-chain tokens that can’t be moved from the platform.

Tasks
Tasks: (Web and Mobile UI) A
Design interface for the fitness app
Design a simple social network for posting and sharing videos and pictures
Wallets showing both tokens, trading pages etc.

Task B: (Web and Mobile UI)
Design the advert upload interface with the UX in mind focusing on:
Uploading ads (3 mins video limit)
Setting fees etc.
Viewing metrics
Wallets (Fund which connects to card and blockchain deposit, Balance, Withdraw)
Task (Backend) A
Database design
API endpoints from and to db ?
What else?

Task B

Account/Wallet creation
Smart contracts for reward tokens.
Smart contract for fuel tokens.

Mobile App Development Task:
Fitness app development (Consider open source solution implementation)
Basic requirement: The App only requires to obtain information from the android device accelerometer sensors. Which means only activities support required will be limited to cycling, jogging and walking.
Merge with the web based development to complete functionality.
Smart contract/Oracle Implementation suggestions:

The basic information required by the two-staged contracts to execute needs to be derived from two different sources. First stage is derived from the successful completion of the video adverts which releases the fuel token generated to the wallet making it usable and tradable. The only utility for this is to serve as fuel to carry out fitness exercises verifiable using the sensor information/data. These data are collated and collected by the SQL/Oracle database.

https://docs.oracle.com/en/cloud/saas/track-and-trace-cloud/user-guide/create-smart-contracts.html#GUID-CBE43157-93D3-403C-B2E0-1D4251685558 

Configure and validate the smart contract rules
Activate smart contract to test
Define Outbound connections
Define event actions (See link above)

The second phase contract execution criteria will be: If the fitness milestone is completed, then release the second token to the wallet. 

Defining the core functionality and features:

Core functionality of Distancia: Is the fitness app that sends data to the Oracle and in return provides points in the form of tokens to the user’s account. Making this functionality possible are the added features to implement the blockchain based dual tokenomics. The fuel token which is secured from watching adverts. Then the reward token which is secured from completing the fitness milestones. Take note that the fuel token is applied and burnt to obtain the final reward token.

Other features:
Social media application which offers a complementary application for all to use (Sample: Tiktok and Instagram). 
Wallet inbuilt exchange allowing token-fiat conversion
Donation feature allowing users to post requests and accept donations into their wallets for a specific cause.

