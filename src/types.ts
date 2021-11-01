export interface MALAnimelist {
    request_hash: string;
    request_cached: boolean;
    request_cache_expiry: number;
    anime?: (AnimeEntity)[] | null;
  }
  export interface AnimeEntity {
    mal_id: number;
    title: string;
    video_url: string;
    url: string;
    image_url: string;
    type: string;
    watching_status: number;
    score: number;
    watched_episodes: number;
    total_episodes: number;
    airing_status: number;
    season_name?: null;
    season_year?: null;
    has_episode_video: boolean;
    has_promo_video: boolean;
    has_video: boolean;
    is_rewatching: boolean;
    tags?: null;
    rating: string;
    start_date: string;
    end_date: string;
    watch_start_date?: string | null;
    watch_end_date?: string | null;
    days?: number | null;
    storage?: null;
    priority: string;
    added_to_list: boolean;
    studios?: (null)[] | null;
    licensors?: (null)[] | null;
    genres?: (GenresEntityOrDemographicsEntity | null)[] | null;
    demographics?: (GenresEntityOrDemographicsEntity1 | null)[] | null;
  }
  export interface GenresEntityOrDemographicsEntity {
    mal_id: number;
    type: string;
    name: string;
    url: string;
  }
  export interface GenresEntityOrDemographicsEntity1 {
    mal_id: number;
    type: string;
    name: string;
    url: string;
  }
  