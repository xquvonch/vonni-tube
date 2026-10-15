import { useCallback, useEffect, useRef, useState } from "react";
import { ApiService } from "../service/api.service";

export function useInfiniteVideos(query) {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const nextToken = useRef(undefined);
  const busy = useRef(false);

  const loadMore = useCallback(async () => {
    if (busy.current || !hasMore) return;
    busy.current = true;
    setLoading(true);

    try {
      const data = await ApiService.fetching(
        `search?part=snippet&type=video&q=${encodeURIComponent(query)}`,
        nextToken.current ? { pageToken: nextToken.current } : {},
      );
      setVideos((prev) => [...prev, ...data.items]);
      nextToken.current = data.nextPageToken;
      if (!data.nextPageToken) setHasMore(false);
    } finally {
      busy.current = false;
      setLoading(false);
    }
  }, [query, hasMore]);

  // query o'zgarsa, hammasini noldan boshlaymiz
  useEffect(() => {
    setVideos([]);
    setHasMore(true);
    nextToken.current = undefined;
  }, [query]);

  return { videos, loading, hasMore, loadMore };
}