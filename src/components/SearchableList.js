import React, { useState, useEffect } from 'react';

import SearchInput from '../SearchInput/SearchInput';
import List from '../List/List';


// Example 
//    <SearchableList
//      classPrefix='some-prefix'
//      list={data}
//      listLimit={20}
//      scrollInitialPosition='top'
//      loadMore={loadMore}
//      listItem={ListItem}
//      startSearch={startSearch}
//      stopSearch={stopSearch}
//    />

const SearchableList = (props) => {
  const {
    classPrefix = 'search-list'
  } = props;

  const [query, setQuery] = useState('');

  const [loadedQuery, setLoadedQuery] = useState('');

  useEffect(() => {
    setLoadedQuery(query);
  }, [props.list, query]);

  return (
    <div className={classPrefix} >
      <div className={classPrefix + "__input-wrap"}>
        <SearchInput
          classPrefix={classPrefix}
          query={query}
          setQuery={setQuery}
          startSearch={props.startSearch}
          stopSearch={props.stopSearch}
        />
      </div>

      <div className={classPrefix + "__list-wrap"}>
        <List
          list={props.list}
          limit={props.listLimit}
          classPrefix={classPrefix}
          search={loadedQuery}
          scrollInitialPosition={props.scrollInitialPosition}
          loadMore={props.loadMore}
          listItem={props.listItem}
          listItemProps={props.listItemProps}
        />
      </div>
    </div>
  );
};

export default SearchableList;