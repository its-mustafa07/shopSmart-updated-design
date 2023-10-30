import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import {FAQData} from '../../components/faq-component/faqData';
import FAQList from '../../components/faq-component';
import {useStyles} from './styles';
import BackgroundGradient from '../../components/background-gradient';

const FAQ = () => {
  const styles = useStyles();
  return (
    <BackgroundGradient>
      <SafeAreaView style={styles.faqMainWrapper}>
        <View>
          <Text style={styles.HeadinFAQ}>FAQ</Text>
        </View>
        <ScrollView>
          <View style={{paddingVertical: 20}}>
            {FAQData.map(item => {
              return (
                <FAQList
                  key={item.id}
                  title={item.Question}
                  discription={item.answer}
                />
              );
            })}
          </View>
        </ScrollView>
      </SafeAreaView>
    </BackgroundGradient>
  );
};
export default FAQ;
