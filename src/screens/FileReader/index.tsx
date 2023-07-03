import { ScrollView } from 'react-native';
import Pdf from 'react-native-pdf';
import { Dimensions } from 'react-native';
import { View } from 'react-native';

export function FileReader({route}: any) {
  const { params } = route;
  const file = params.file;
    return (
      <View style={{
        flex: 1
      }}
      
      >
        <Pdf
          scale={1}
          fitPolicy={2}
          source={file}
          style={{
            flex: 1,
            width: Dimensions.get('window').width, height: Dimensions.get('window').height
          }}
          onLoadComplete={(numberOfPages, filePath) => {
            console.log(`Number of pages: ${numberOfPages}`);
          }}
          onPageChanged={(page, numberOfPages) => {
            console.log(`Current page: ${page}`);
          }}
          onError={(error) => {
            console.log(error);
          }}
          onPressLink={(uri) => {
            console.log(`Link pressed: ${uri}`);
          }}
        />
      </View>
    )
}