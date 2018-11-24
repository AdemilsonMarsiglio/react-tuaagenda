import React, { Component } from 'react';
import { Dimensions, VirtualizedList } from 'react-native';

const { width } = Dimensions.get('window');
let startAtIndex;
let stupidList;

export default class InfiniteViewPager extends Component {

  constructor(props) {
    super(props);

    startAtIndex = props.numberPages / 2;
    stupidList = new Array(props.numberPages);
  }

  render() {
    return (
      <VirtualizedList
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        decelerationRate={0}
        initialNumToRender={1}
        maxToRenderPerBatch={1}
        windowSize={2}
        initialScrollIndex={startAtIndex}
        getItemCount={data => data.length}
        data={stupidList}
        keyExtractor={(item, index) => index.toString()}
        getItemLayout={(data, index) => ({
          length: width,
          offset: width * index,
          index,
        })}
        getItem={(data, index) => ({ index })}
        renderItem={this.props.renderPage}
        onScrollBeginDrag={()=>{console.log('\n\n\n\n\n')}}
        onMomentumScrollEnd={this.props.onScrollEnd}
      />
    )
  }
}