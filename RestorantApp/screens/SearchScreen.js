import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import SearchBar from "../src/components/SearchBar"
import useResult from "../src/hooks/useResult"
import ResultList from "../src/components/ResultList"


export default function SearchScreen() {

  const [term, setTerm] = useState('')
  const [searchApi, results, errorMessage] = useResult()

  const filterResultByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price
    })
  }

  return (
    <View>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={() => {
        searchApi(term)
      }} />

      {/* Bağlantı hatası var ise errorMsg göster */}
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      
      {/* Eğer Data yoksa içerik gösterme length 0 dan büyükse içerikleri ver */}
      {results.length == 0 ? <></> : 
      <>
        <ResultList title="Ucuz Restoranlar" results={filterResultByPrice('₺')} />
        <ResultList title="Uygun Restoranlar" results={filterResultByPrice('₺₺')} />
        <ResultList title="Pahalı Restoranlar" results={filterResultByPrice('₺₺₺')} />
      </>
      }
    </View>
  )
}

const styles = StyleSheet.create({})