export interface TPS {
  time: number;
  price: number;
  size: number;
}

export interface Aggregate {
  time: number;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  adjValue: number;
}

export interface AggregateResponse {
  expectedClosingTime: number;
  aggregates: Aggregate[];
  resolution: number;
  lastAggregateEndTime: number;
}

export interface Ticker {
  bid: TPS;
  ask: TPS;
  last: TPS;
  pre: TPS;
  open: TPS;
  qualityId: string;
  leverage: string;
  delta: string;
}

export interface TimeLineResponse {
  data: TimelineEvent[];
  cursors: {
    before: string;
    after: string;
  };
}

export interface TimelineEvent {
  type: string;
  data: {
    id: string;
    timestamp: number;
    icon: string;
    title: string;
    body: string;
    cashChangeAmount: number;
    action: ResponseItemAction;
    attributes: any[];
    month: string;
  };
}

interface Document {
  title: string;
  detail: string;
  action: ResponseItemAction;
  id: string;
  postboxType: string;
}

interface DataDetail {
  type: string;
  text?: string;
  value?: number;
  fractionDigits?: number;
  currencyId?: string;
}

interface TableData {
  title: string;
  detail: DataDetail;
  style: string;
}

interface Section {
  type: string;
  title: string;
  text?: string;
  style?: string;
  data?: TableData[];
  documents?: Document[];
}

export interface TimelineDetail {
  id: string;
  titleText: string;
  subtitleText: string;
  sections: Section[];
}

export interface TimelineTransaction {
  items: TransactionResponseItem[];
}

export interface TransactionResponseItem {
  action?: ResponseItemAction;
  amount: ResponseItemAmount;
  badge?: any;
  eventType: string;
  icon: string;
  id: string;
  status: string;
  subAmount?: ResponseItemAmount;
  subtitle?: string;
  timestamp: string;
  title: string;
}

export interface ResponseItemAction {
  payload: string;
  type: string;
}

export interface ResponseItemAmount {
  currencyId: string;
  fractionDigits: number;
  value: number;
}

export interface TimelineActivityLogResponse {
  items: TimelineActivityLogResponseItem[];
}

export interface TimelineActivityLogResponseItem {
  action?: ResponseItemAction;
  eventType: string;
  icon: string;
  id: string;
  subtitle?: string;
  timestamp: string;
  title: string;
}

export interface ProcessResponse {
  processId: string;
  countdownInSeconds: number;
  '2fa': string;
}

export type TradeRepublicMessageType =
  | 'accruedInterestTermsRequired'
  | 'addToWatchlist'
  | 'aggregateHistoryLight'
  | 'availableCash'
  | 'availableCashForPayout'
  | 'availableSize'
  | 'cancelOrder'
  | 'cancelPriceAlarm'
  | 'cancelSavingsPlan'
  | 'cash'
  | 'changeOrder'
  | 'changeSavingsPlan'
  | 'collection'
  | 'compactPortfolio'
  | 'confirmOrder'
  | 'createPriceAlarm'
  | 'createSavingsPlan'
  | 'cryptoDetails'
  | 'etfComposition'
  | 'etfDetails'
  | 'followWatchlist'
  | 'frontendExperiment'
  | 'instrument'
  | 'instrumentExchange'
  | 'homeInstrumentExchange'
  | 'instrumentSuitability'
  | 'investableWatchlist'
  | 'messageOfTheDay'
  | 'namedWatchlist'
  | 'neonCards'
  | 'derivatives'
  | 'neonSearch'
  | 'neonSearchAggregations'
  | 'neonSearchSuggestedTags'
  | 'neonSearchTags'
  | 'neonNews'
  | 'newsSubscriptions'
  | 'orders'
  | 'performance'
  | 'portfolio'
  | 'portfolioAggregateHistory'
  | 'portfolioAggregateHistoryLight'
  | 'portfolioStatus'
  | 'priceAlarms'
  | 'priceForOrder'
  | 'removeFromWatchlist'
  | 'savingsPlanParameters'
  | 'savingsPlans'
  | 'settings'
  | 'simpleCreateOrder'
  | 'stockDetailDividends'
  | 'stockDetailKpis'
  | 'stockDetails'
  | 'subscribeNews'
  | 'ticker'
  | 'timeline'
  | 'timelineActivityLog'
  | 'timelineActions'
  | 'timelineDetail'
  | 'timelineDetailV2'
  | 'timelineTransactions'
  | 'tradingPerkConditionStatus'
  | 'unfollowWatchlist'
  | 'unsubscribeNews'
  | 'watchlist'
  | 'watchlists';
