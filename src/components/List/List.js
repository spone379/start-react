import React, { useRef, useLayoutEffect, useEffect } from 'react';
import { Scrollbars } from "react-custom-scrollbars";

import { useDidMount, usePrevious } from '../../hooks';
import Spinner from '../UI/Spinner';


// const ListItem = (props) => {
//   return <li>{props.item.title}</li>
// }

// const props = {
//   list: [
//     { id: 1, title: 'I am number 1' },
//     { id: 2, title: 'I am number 2' },
//     { id: 3, title: 'I am number 3' },
//     { id: 4, title: 'I am number 4' },
//     { id: 5, title: 'I am number 5' },
//     { id: 6, title: 'I am number 6' },
//     { id: 7, title: 'I am number 7' },
//     { id: 8, title: 'I am number 8' },
//     { id: 9, title: 'I am number 9' },
//     { id: 10, title: 'I am number 10' },
//     { id: 11, title: 'I am number 11' },
//     { id: 12, title: 'I am number 12' },
//     { id: 13, title: 'I am number 13' },
//     { id: 14, title: 'I am number 14' },
//     { id: 15, title: 'I am number 15' },
//     { id: 16, title: 'I am number 16' },
//     { id: 17, title: 'I am number 17' },
//     { id: 18, title: 'I am number 18' },
//     { id: 19, title: 'I am number 19' },
//   ],
//   scrollInitialPosition: 'top',
//   limit: 19,
//   search: '',
//   listItem: ListItem,
//   classPrefix: "custom-list",
//   loadMore: () => console.log('loadMore')
// }


const List = (props) => {
  console.log("LIST RENDER");

  const {
    list = [],
    limit,
    scrollInitialPosition = 'top',
    search = null,
    classPrefix,
    listItem: ListItem
  } = props;

  const listRef = useRef();
  const limitRef = useRef(limit);
  const scrollPosition = useRef(0);

  const prevSearch = usePrevious(search);
  const prevListLength = usePrevious(list.length);

  useDidMount(() => {
    if (scrollInitialPosition === 'bottom') {
      listRef.current.scrollToBottom();
    }

    limitRef.current = list.length <= limit
      ? limit
      : list.length;
  });

  useEffect(() => {
    if (prevSearch !== search) {                // if we already have more list items then LIMIT
      limitRef.current = list.length <= limit
        ? limit
        : list.length;

      if (listRef.current) {
        listRef.current.scrollTop(0);
      }
    }
  }, [limit, list.length, prevSearch, search]);

  useLayoutEffect(() => {
    if (!prevListLength && list.length && scrollInitialPosition === 'bottom') {
      listRef.current.scrollToBottom();
    }
    if (prevListLength && list.length !== prevListLength && scrollInitialPosition === 'bottom') {       // save scroll on last item if we scroll to top

      listRef.current.scrollTop(listRef.current.getScrollHeight() - scrollPosition.current);
    }
  }, [list.length, prevListLength, scrollInitialPosition]);


  const handleScroll = ({ target: { scrollTop, scrollHeight, clientHeight } }) => {
    const scrollBottom = scrollHeight - scrollTop - clientHeight;

    if (scrollInitialPosition === 'top' && scrollBottom === 0 && limitRef.current === list.length) {
      limitRef.current = list.length + limit;

      props.loadMore(list.length);    // pass offset to loadMore func
    }
    else if (scrollInitialPosition === 'bottom' && scrollTop === 0 && limitRef.current === list.length) {
      limitRef.current = list.length + limit;

      scrollPosition.current = scrollHeight - scrollTop;

      props.loadMore(list.length);
    }
  };

  if (props.listLoadPending) {
    return (
      <div className={classPrefix + "__load-wrap"}>
        <Spinner width="30px" height="30px" />
      </div>
    );
  }

  return (
    <div className={classPrefix + "__list-container"}>
      {!!list.length &&
        <Scrollbars
          onScroll={handleScroll}
          autoHide
          ref={listRef}
          renderTrackHorizontal={props => <div {...props} style={{ display: 'none' }} className="track-horizontal" />} >

          <ul className={classPrefix + "__list"}>
            {list.map(item => {
              return <ListItem
                key={item.id || item}
                item={item}
                {...props.listItemProps}
                className={classPrefix + "__item"} />;
            })}
          </ul>
        </Scrollbars>
      }
    </div>
  );
};

export default List;