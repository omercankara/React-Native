import { ScrollView, StyleSheet,Text, View } from 'react-native'

import React from 'react'
import Information from '../component/Information'

export default function CoursesInformation() {
  return (
    <ScrollView> 
      <Information title="Angular" description="Kapsamlı C Programlama Eğitimi" imageSource={require('../../assets/c.png')} />
      <Information title="Angular" description="Kapsamlı C Programlama Eğitimi" imageSource={require('../../assets/c.png')} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({})