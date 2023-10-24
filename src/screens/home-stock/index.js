import React, {useState} from 'react';
import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native';
import useStyles from './styles';
import BackgroundGradient from '../../components/background-gradient';
import ProfileHeader from '../../components/profile-header';
import ListItem from '../../components/list-item';
import homeStockData from '../../data/HOME_STOCK-DATA';
import toRefillData from '../../data/TO_REFILL_DATA';
import {NextIcon, PreviousIcon} from '../../../assets/svg-icons/svgIcons';

const HomeStockScreen = () => {
  const styles = useStyles();

  //PAGINATION FOR 'YOU HOME STOCK LIST' LOGIC
  const [stockData, setStockData] = useState(homeStockData);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(stockData.length / itemsPerPage);

  const paginateData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedData = stockData.slice(startIndex, endIndex);
    return paginatedData;
  };

  const renderData = paginateData();

  const handleNextPage = () => {
    if (currentPage < stockData.length / itemsPerPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const getPageNumbers = () => {
    const pageNumbers = [currentPage];
    if (totalPages > 1) {
      if (currentPage > 1) pageNumbers.unshift(currentPage - 1);
      if (currentPage < totalPages) pageNumbers.push(currentPage + 1);
    }
    return pageNumbers;
  };

  //PAGINATION FOR 'STOCK THAT NEEDS REFILLING LIST' LOGIC
  const [toFillData, setToFillData] = useState(toRefillData);
  const [currentPage2, setCurrentPage2] = useState(1);
  const itemsPerPage2 = 3;
  const totalPages2 = Math.ceil(toFillData.length / itemsPerPage);

  const paginateData2 = () => {
    const startIndex = (currentPage2 - 1) * itemsPerPage2;
    const endIndex = startIndex + itemsPerPage;
    const paginatedData = toFillData.slice(startIndex, endIndex);
    return paginatedData;
  };
  const renderData2 = paginateData2();

  const handleNextPage2 = () => {
    if (currentPage2 < toFillData.length / itemsPerPage2) {
      setCurrentPage2(currentPage2 + 1);
    }
  };

  const handlePreviousPage2 = () => {
    if (currentPage2 > 1) {
      setCurrentPage2(currentPage2 - 1);
    }
  };

  const getPageNumbers2 = () => {
    const pageNumbers = [currentPage2];
    if (totalPages2 > 1) {
      if (currentPage2 > 1) pageNumbers.unshift(currentPage2 - 1);
      if (currentPage2 < totalPages2) pageNumbers.push(currentPage2 + 1);
    }
    return pageNumbers;
  };

  return (
    <BackgroundGradient>
      <SafeAreaView style={{flex: 1}}>
        <ProfileHeader style={styles.stockHeader} />
        <Text style={styles.stockTitle}>Home stock</Text>
        <View style={styles.listsContainer}>
          <View style={styles.homeStockList}>
            {/* YOUR HOME STOCK LIST */}

            <View style={styles.listHeader}>
              <Text style={styles.headingText}>Your home stock</Text>
              <TouchableOpacity>
                <Text style={styles.seeAllText}>See all...</Text>
              </TouchableOpacity>
            </View>
            {renderData.map((item, index) => (
              <ListItem
                key={index}
                title={item.title}
                style={{marginBottom: 15}}
              />
            ))}

            {/* YOUR HOME STOCK PAGINATION */}

            <View style={styles.paginationContainer}>
              <TouchableOpacity
                disabled={currentPage === 1}
                onPress={handlePreviousPage}
                style={
                  currentPage === 1 ? styles.disabledButton : styles.button
                }>
                <PreviousIcon />
              </TouchableOpacity>
              {getPageNumbers().map(pageNumber => (
                <TouchableOpacity
                  key={pageNumber}
                  onPress={
                    currentPage > pageNumber
                      ? handlePreviousPage
                      : currentPage < pageNumber
                      ? handleNextPage
                      : currentPage === pageNumber
                      ? null
                      : null
                  }
                  style={
                    currentPage === pageNumber
                      ? styles.activePage
                      : styles.button
                  }>
                  <Text
                    style={
                      currentPage === pageNumber
                        ? styles.activeText
                        : styles.inactiveText
                    }>
                    {pageNumber}
                  </Text>
                </TouchableOpacity>
              ))}
              <TouchableOpacity
                disabled={currentPage === totalPages}
                onPress={handleNextPage}
                style={
                  currentPage === totalPages
                    ? styles.disabledButton
                    : styles.button
                }>
                <NextIcon />
              </TouchableOpacity>
            </View>
          </View>

          {/* STOCK THAT NEEDS REFILLING LIST */}
          <View style={styles.refillStockList}>
            <View style={styles.listHeader}>
              <Text style={styles.headingText}>Stock that needs refilling</Text>
              <TouchableOpacity>
                <Text style={styles.seeAllText}>See all...</Text>
              </TouchableOpacity>
            </View>
            {renderData2.map((item, index) => (
              <ListItem
                key={index}
                title={item.title}
                style={{marginBottom: 15}}
              />
            ))}

            {/* STOCK THAT NEEDS RELILLING PAGINATION */}
            <View style={styles.paginationContainer}>
              <TouchableOpacity
                disabled={currentPage2 === 1}
                onPress={handlePreviousPage2}
                style={
                  currentPage2 === 1 ? styles.disabledButton : styles.button
                }>
                <PreviousIcon />
              </TouchableOpacity>
              {getPageNumbers2().map(pageNumber => (
                <TouchableOpacity
                  key={pageNumber}
                  onPress={
                    currentPage2 > pageNumber
                      ? handlePreviousPage2
                      : currentPage2 < pageNumber
                      ? handleNextPage2
                      : currentPage2 === pageNumber
                      ? null
                      : null
                  }
                  style={
                    currentPage2 === pageNumber
                      ? styles.activePage
                      : styles.button
                  }>
                  <Text
                    style={
                      currentPage2 === pageNumber
                        ? styles.activeText
                        : styles.inactiveText
                    }>
                    {pageNumber}
                  </Text>
                </TouchableOpacity>
              ))}
              <TouchableOpacity
                disabled={currentPage2 === totalPages2}
                onPress={handleNextPage2}
                style={
                  currentPage2 === totalPages2
                    ? styles.disabledButton
                    : styles.button
                }>
                <NextIcon />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </BackgroundGradient>
  );
};

// const HomeStockScreen = () => {
//   const [isSticky, setIsSticky] = useState(true);
//   const styles = useStyles();

//   const renderItem = ({item}) => (
//     <ListItem style={{marginBottom: 20}} title={item.title} />
//   );

//   const renderSectionHeader = ({section}) => (
//     <View style={[styles.sectionHeader, isSticky ? styles.stickyHeader : null]}>
//       <Text style={styles.sectionHeaderText}>{section.title}</Text>
//       <TouchableOpacity>
//         <Text style={styles.seeAllText}>See all...</Text>
//       </TouchableOpacity>
//     </View>
//   );

//   const onScroll = event => {
//     const offsetY = event.nativeEvent.contentOffset.y;
//     const isHeaderSticky = offsetY > 20; // Check if the scroll offset is greater than 0
//     setIsSticky(isHeaderSticky);
//   };

//   return (
//     <BackgroundGradient>
//       <SafeAreaView style={{flex: 1}}>
//         <ProfileHeader style={styles.stockHeader} />
//         <Text style={styles.stockTitle}>Home stock</Text>
//         <View style={styles.listsContainer}>
//           <SectionList
//             sections={data1}
//             renderItem={renderItem}
//             renderSectionHeader={renderSectionHeader}
//             keyExtractor={(item, index) => item + index}
//             stickySectionHeadersEnabled={true}
//             // onViewableItemsChanged={onViewableItemsChanged}
//             onScroll={onScroll}
//           />
//         </View>
//       </SafeAreaView>
//     </BackgroundGradient>
//   );
// };

export default HomeStockScreen;
