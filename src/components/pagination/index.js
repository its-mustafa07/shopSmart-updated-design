import React, {useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {PreviousIcon, NextIcon} from '../../../assets/svg-icons/svgIcons';
import useStyles from './styles';

const Pagination = ({totalPages, itemsPerPage, data}) => {
  const [currentPage, setCurrentPage] = useState(1);
  //   const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < data.length / itemsPerPage) {
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

  return (
    <View style={styles.paginationContainer}>
      <TouchableOpacity
        disabled={currentPage === 1}
        onPress={handlePreviousPage}
        style={currentPage === 1 ? styles.disabledButton : styles.button}>
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
            currentPage === pageNumber ? styles.activePage : styles.button
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
          currentPage === totalPages ? styles.disabledButton : styles.button
        }>
        <NextIcon />
      </TouchableOpacity>
    </View>
  );
};

export default Pagination;
