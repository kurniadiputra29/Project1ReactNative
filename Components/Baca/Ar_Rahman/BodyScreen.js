import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, Dimensions, ScrollView} from 'react-native';
import { Content, Text} from "native-base";

export default class BodyScreen extends Component{
  render(){
    return(
      <View style={style.container}>
      <ScrollView style={style.wrepper}>

      { this.props.destop == 'Ayat_Arti'
        ?(
          <Content style={{backgroundColor: '#F3FEFF' }}>
            <View style={style.bismillah}>
              <Text style={style.innerBismillah}>
                بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                الرَّحْمَنُ ﴿١﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>1. </Text>
                (Tuhan) Yang Maha Pemurah,
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                عَلَّمَ الْقُرْآنَ ﴿٢﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>2. </Text>
                Yang telah mengajarkan al Quran.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                خَلَقَ الْإِنسَانَ ﴿٣﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>3. </Text>
                Dia menciptakan manusia.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                عَلَّمَهُ الْبَيَانَ ﴿٤﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>4. </Text>
                Mengajarnya pandai berbicara.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                الشَّمْسُ وَالْقَمَرُ بِحُسْبَانٍ ﴿٥﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>5. </Text>
                Matahari dan bulan (beredar) menurut perhitungan.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                وَالنَّجْمُ وَالشَّجَرُ يَسْجُدَانِ ﴿٦﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>6. </Text>
                Dan tumbuh-tumbuhan dan pohon-pohonan kedua-duanya tunduk kepada-Nya.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                وَالسَّمَاء رَفَعَهَا وَوَضَعَ الْمِيزَانَ ﴿٧﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>7. </Text>
                Dan Allah telah meninggikan langit dan Dia meletakkan neraca (keadilan).
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                أَلَّا تَطْغَوْا فِي الْمِيزَانِ ﴿٨﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>8. </Text>
                Supaya kamu jangan melampaui batas tentang neraca itu.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                وَأَقِيمُوا الْوَزْنَ بِالْقِسْطِ وَلَا تُخْسِرُوا الْمِيزَانَ ﴿٩﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>9. </Text>
                Dan tegakkanlah timbangan itu dengan adil dan janganlah kamu mengurangi neraca itu. 
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                وَالْأَرْضَ وَضَعَهَا لِلْأَنَامِ ﴿١٠﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>10. </Text>
                Dan Allah telah meratakan bumi untuk makhluk(Nya).
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                فِيهَا فَاكِهَةٌ وَالنَّخْلُ ذَاتُ الْأَكْمَامِ ﴿١١﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>11. </Text>
                Di bumi itu ada buah-buahan dan pohon kurma yang mempunyai kelopak mayang.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                وَالْحَبُّ ذُو الْعَصْفِ وَالرَّيْحَانُ ﴿١٢﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>12. </Text>
                Dan biji-bijian yang berkulit dan bunga-bunga yang harum baunya.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                فَبِأَيِّ آلَاء رَبِّكُمَا تُكَذِّبَانِ ﴿١٣﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>13. </Text>
                Maka nikmat Tuhan kamu yang manakah yang kamu dustakan?
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                خَلَقَ الْإِنسَانَ مِن صَلْصَالٍ كَالْفَخَّارِ ﴿١٤﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>14. </Text>
                Dia menciptakan manusia dari tanah kering seperti tembikar, 
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                وَخَلَقَ الْجَانَّ مِن مَّارِجٍ مِّن نَّارٍ ﴿١٥﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>15. </Text>
                dan Dia menciptakan jin dari nyala api. 
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                فَبِأَيِّ آلَاء رَبِّكُمَا تُكَذِّبَانِ ﴿١٦﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>16. </Text>
                Maka nikmat Tuhan kamu yang manakah yang kamu dustakan?
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                رَبُّ الْمَشْرِقَيْنِ وَرَبُّ الْمَغْرِبَيْنِ ﴿١٧﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>17. </Text>
                Tuhan yang memelihara kedua tempat terbit matahari dan Tuhan yang memelihara kedua tempat terbenamnya
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                فَبِأَيِّ آلَاء رَبِّكُمَا تُكَذِّبَانِ ﴿١٨﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>18. </Text>
                Maka nikmat Tuhan kamu yang manakah yang kamu dustakan?
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                مَرَجَ الْبَحْرَيْنِ يَلْتَقِيَانِ ﴿١٩﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>19. </Text>
                Dia membiarkan dua lautan mengalir yang keduanya kemudian bertemu,
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                بَيْنَهُمَا بَرْزَخٌ لَّا يَبْغِيَانِ ﴿٢٠﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>20. </Text>
                antara keduanya ada batas yang tidak dilampaui masing-masing.
              </Text>
            </View><View style={style.contentA}>
              <Text style={style.arab}>
                فَبِأَيِّ آلَاء رَبِّكُمَا تُكَذِّبَانِ ﴿٢١﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>21. </Text>
                Maka nikmat Tuhan kamu yang manakah yang kamu dustakan?
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                يَخْرُجُ مِنْهُمَا اللُّؤْلُؤُ وَالْمَرْجَانُ ﴿٢٢﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>22. </Text>
                Dari keduanya keluar mutiara dan marjan.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                فَبِأَيِّ آلَاء رَبِّكُمَا تُكَذِّبَانِ ﴿٢٣﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>23. </Text>
                Maka nikmat Tuhan kamu yang manakah yang kamu dustakan?
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                وَلَهُ الْجَوَارِ الْمُنشَآتُ فِي الْبَحْرِ كَالْأَعْلَامِ ﴿٢٤﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>24. </Text>
                Dan kepunyaan-Nya lah bahtera-bahtera yang tinggi layarnya di lautan laksana gunung-gunung. 
              </Text>
            </View><View style={style.contentA}>
              <Text style={style.arab}>
                فَبِأَيِّ آلَاء رَبِّكُمَا تُكَذِّبَانِ ﴿٢٥﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>25. </Text>
                Maka nikmat Tuhan kamu yang manakah yang kamu dustakan?
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                كُلُّ مَنْ عَلَيْهَا فَانٍ ﴿٢٦﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>26. </Text>
                Semua yang ada di bumi itu akan binasa.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                وَيَبْقَى وَجْهُ رَبِّكَ ذُو الْجَلَالِ وَالْإِكْرَامِ ﴿٢٧﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>27. </Text>
                Dan tetap kekal Dzat Tuhanmu yang mempunyai kebesaran dan kemuliaan.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                فَبِأَيِّ آلَاء رَبِّكُمَا تُكَذِّبَانِ ﴿٢٨﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>28. </Text>
                Maka nikmat Tuhan kamu yang manakah yang kamu dustakan? 
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                يَسْأَلُهُ مَن فِي السَّمَاوَاتِ وَالْأَرْضِ كُلَّ يَوْمٍ هُوَ فِي شَأْنٍ ﴿٢٩﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>29. </Text>
                Semua yang ada di langit dan bumi selalu meminta kepada-Nya. Setiap waktu Dia dalam kesibukan. 
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                فَبِأَيِّ آلَاء رَبِّكُمَا تُكَذِّبَانِ ﴿٣٠﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>30. </Text>
                Maka nikmat Rabb-mu yang manakah yang kamu dustakan?
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                سَنَفْرُغُ لَكُمْ أَيُّهَا الثَّقَلَانِ ﴿٣١﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>31. </Text>
                Kami akan memperhatikan sepenuhnya kepadamu hai manusia dan jin.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                فَبِأَيِّ آلَاء رَبِّكُمَا تُكَذِّبَانِ ﴿٣٢﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>32. </Text>
                Maka nikmat Tuhan kamu yang manakah yang kamu dustakan? 
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                يَا مَعْشَرَ الْجِنِّ وَالْإِنسِ إِنِ اسْتَطَعْتُمْ أَن تَنفُذُوا مِنْ أَقْطَارِ السَّمَاوَاتِ وَالْأَرْضِ فَانفُذُوا لَا تَنفُذُونَ إِلَّا بِسُلْطَانٍ ﴿٣٣﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>33. </Text>
                Hai jama'ah jin dan manusia, jika kamu sanggup menembus (melintasi) penjuru langit dan bumi, maka lintasilah, kamu tidak dapat menembusnya kecuali dengan kekuatan.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                فَبِأَيِّ آلَاء رَبِّكُمَا تُكَذِّبَانِ ﴿٣٤﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>34. </Text>
                Maka nikmat Tuhan kamu yang manakah yang kamu dustakan?
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                يُرْسَلُ عَلَيْكُمَا شُوَاظٌ مِّن نَّارٍ وَنُحَاسٌ فَلَا تَنتَصِرَانِ ﴿٣٥﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>35. </Text>
                Kepada kamu, (jin dan manusia) dilepaskan nyala api dan cairan tembaga maka kamu tidak dapat menyelamatkan diri (dari padanya).
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                فَبِأَيِّ آلَاء رَبِّكُمَا تُكَذِّبَانِ ﴿٣٦﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>36. </Text>
                Maka nikmat Tuhan kamu yang manakah yang kamu dustakan?
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                فَإِذَا انشَقَّتِ السَّمَاء فَكَانَتْ وَرْدَةً كَالدِّهَانِ ﴿٣٧﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>37. </Text>
                Maka apabila langit telah terbelah dan menjadi merah mawar seperti (kilapan) minyak.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                فَبِأَيِّ آلَاء رَبِّكُمَا تُكَذِّبَانِ ﴿٣٨﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>38. </Text>
                Maka nikmat Tuhan kamu yang manakah yang kamu dustakan?
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                فَيَوْمَئِذٍ لَّا يُسْأَلُ عَن ذَنبِهِ إِنسٌ وَلَا جَانٌّ ﴿٣٩﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>39. </Text>
                Pada waktu itu manusia dan jin tidak ditanya tentang dosanya.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                فَبِأَيِّ آلَاء رَبِّكُمَا تُكَذِّبَانِ ﴿٤٠﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>40. </Text>
                Maka nikmat Tuhan kamu yang manakah yang kamu dustakan? 
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                يُعْرَفُ الْمُجْرِمُونَ بِسِيمَاهُمْ فَيُؤْخَذُ بِالنَّوَاصِي وَالْأَقْدَامِ ﴿٤١﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>41. </Text>
                Orang-orang yang berdosa dikenal dengan tanda-tandannya, lalu dipegang ubun-ubun dan kaki mereka.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                فَبِأَيِّ آلَاء رَبِّكُمَا تُكَذِّبَانِ ﴿٤٢﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>42. </Text>
                Maka nikmat Tuhan kamu yang manakah yang kamu dustakan?
              </Text>
            </View><View style={style.contentA}>
              <Text style={style.arab}>
                هَذِهِ جَهَنَّمُ الَّتِي يُكَذِّبُ بِهَا الْمُجْرِمُونَ ﴿٤٣﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>43. </Text>
                Inilah neraka Jahannam yang didustakan oleh orang-orang berdosa.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                يَطُوفُونَ بَيْنَهَا وَبَيْنَ حَمِيمٍ آنٍ ﴿٤٤﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>44. </Text>
                Mereka berkeliling di antaranya dan di antara air mendidih yang memuncak panasnya.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                فَبِأَيِّ آلَاء رَبِّكُمَا تُكَذِّبَانِ ﴿٤٥﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>45. </Text>
                Maka nikmat Tuhan kamu yang manakah yang kamu dustakan?
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                وَلِمَنْ خَافَ مَقَامَ رَبِّهِ جَنَّتَانِ ﴿٤٦﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>46. </Text>
                Dan bagi orang yang takut akan saat menghadap Tuhannya ada dua surga.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                فَبِأَيِّ آلَاء رَبِّكُمَا تُكَذِّبَانِ ﴿٤٧﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>47. </Text>
                Maka nikmat Tuhan kamu yang manakah yang kamu dustakan?,
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                ذَوَاتَا أَفْنَانٍ ﴿٤٨﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>48. </Text>
                kedua surga itu mempunyai pohon-pohonan dan buah-buahan.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                فَبِأَيِّ آلَاء رَبِّكُمَا تُكَذِّبَانِ ﴿٤٩﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>49. </Text>
                Maka nikmat Tuhan kamu yang manakah yang kamu dustakan? 
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                فِيهِمَا عَيْنَانِ تَجْرِيَانِ ﴿٥٠﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>50. </Text>
                Di dalam kedua surga itu ada dua buah mata air yang mengalir
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                فَبِأَيِّ آلَاء رَبِّكُمَا تُكَذِّبَانِ ﴿٥١﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>51. </Text>
                Maka nikmat Tuhan kamu yang manakah yang kamu dustakan?
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                فِيهِمَا مِن كُلِّ فَاكِهَةٍ زَوْجَانِ ﴿٥٢﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>52. </Text>
                Di dalam kedua surga itu terdapat segala macam buah-buahan yang berpasangan.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                فَبِأَيِّ آلَاء رَبِّكُمَا تُكَذِّبَانِ ﴿٥٣﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>53. </Text>
                Maka nikmat Tuhan kamu yang manakah yang kamu dustakan?
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                مُتَّكِئِينَ عَلَى فُرُشٍ بَطَائِنُهَا مِنْ إِسْتَبْرَقٍ وَجَنَى الْجَنَّتَيْنِ دَانٍ ﴿٥٤﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>54. </Text>
                Mereka bertelekan di atas permadani yang sebelah dalamnya dari sutera. Dan buah-buahan di kedua surga itu dapat (dipetik) dari dekat.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                فَبِأَيِّ آلَاء رَبِّكُمَا تُكَذِّبَانِ ﴿٥٥﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>55. </Text>
                Maka nikmat Tuhan kamu yang manakah yang kamu dustakan?
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                فِيهِنَّ قَاصِرَاتُ الطَّرْفِ لَمْ يَطْمِثْهُنَّ إِنسٌ قَبْلَهُمْ وَلَا جَانٌّ ﴿٥٦﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>56. </Text>
                Di dalam surga itu ada bidadari-bidadari yang sopan menundukkan pandangannya, tidak pernah disentuh oleh manusia sebelum mereka (penghuni-penghuni surga yang menjadi suami mereka), dan tidak pula oleh jin.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                فَبِأَيِّ آلَاء رَبِّكُمَا تُكَذِّبَانِ ﴿٥٧﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>57. </Text>
                Maka nikmat Tuhan kamu yang manakah yang kamu dustakan?
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                كَأَنَّهُنَّ الْيَاقُوتُ وَالْمَرْجَانُ ﴿٥٨﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>58. </Text>
                Seakan-akan bidadari itu permata yakut dan marjan.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                فَبِأَيِّ آلَاء رَبِّكُمَا تُكَذِّبَانِ ﴿٥٩﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>59. </Text>
                Maka nikmat Tuhan kamu yang manakah yang kamu dustakan?
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                هَلْ جَزَاء الْإِحْسَانِ إِلَّا الْإِحْسَانُ ﴿٦٠﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>60. </Text>
                Tidak ada balasan kebaikan kecuali kebaikan (pula).
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                فَبِأَيِّ آلَاء رَبِّكُمَا تُكَذِّبَانِ ﴿٦١﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>61. </Text>
                Maka nikmat Tuhan kamu yang manakah yang kamu dustakan?
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                وَمِن دُونِهِمَا جَنَّتَانِ ﴿٦٢﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>62. </Text>
                Dan selain dari dua surga itu ada dua surga lagi
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                فَبِأَيِّ آلَاء رَبِّكُمَا تُكَذِّبَانِ ﴿٦٣﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>63. </Text>
                Maka nikmat Tuhan kamu yang manakah yang kamu dustakan?
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                مُدْهَامَّتَانِ ﴿٦٤﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>64. </Text>
                Kedua surga itu (kelihatan) hijau tua warnanya. 
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                فَبِأَيِّ آلَاء رَبِّكُمَا تُكَذِّبَانِ ﴿٦٥﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>65. </Text>
                Maka nikmat Tuhan kamu yang manakah yang kamu dustakan?
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                فِيهِمَا عَيْنَانِ نَضَّاخَتَانِ ﴿٦٦﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>66. </Text>
                Di dalam kedua surga itu ada dua buah mata air yang memancar.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                فَبِأَيِّ آلَاء رَبِّكُمَا تُكَذِّبَانِ ﴿٦٧﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>67. </Text>
                Maka nikmat Tuhan kamu yang manakah yang kamu dustakan?
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                فِيهِمَا فَاكِهَةٌ وَنَخْلٌ وَرُمَّانٌ ﴿٦٨﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>68. </Text>
                Di dalam keduanya (ada macam-macam) buah-buahan dan kurma serta delima.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                فَبِأَيِّ آلَاء رَبِّكُمَا تُكَذِّبَانِ ﴿٦٩﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>69. </Text>
                Maka nikmat Tuhan kamu yang manakah yang kamu dustakan?
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                فِيهِنَّ خَيْرَاتٌ حِسَانٌ ﴿٧٠﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>70. </Text>
                Di dalam surga itu ada bidadari-bidadari yang baik-baik lagi cantik-cantik.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                فَبِأَيِّ آلَاء رَبِّكُمَا تُكَذِّبَانِ ﴿٧١﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>71. </Text>
                Maka nikmat Tuhan kamu yang manakah yang kamu dustakan?
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                حُورٌ مَّقْصُورَاتٌ فِي الْخِيَامِ ﴿٧٢﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>72. </Text>
                (Bidadari-bidadari) yang jelita, putih bersih, dipingit dalam rumah. 
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                فَبِأَيِّ آلَاء رَبِّكُمَا تُكَذِّبَانِ ﴿٧٣﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>73. </Text>
                Maka nikmat Tuhan kamu yang manakah yang kamu dustakan?
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                لَمْ يَطْمِثْهُنَّ إِنسٌ قَبْلَهُمْ وَلَا جَانٌّ ﴿٧٤﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>74. </Text>
                Mereka tidak pernah disentuh oleh manusia sebelum mereka (penghuni-penghuni surga yang menjadi suami mereka), dan tidak pula oleh jin.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                فَبِأَيِّ آلَاء رَبِّكُمَا تُكَذِّبَانِ ﴿٧٥﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>75. </Text>
                Maka nikmat Tuhan kamu yang manakah yang kamu dustakan?
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                مُتَّكِئِينَ عَلَى رَفْرَفٍ خُضْرٍ وَعَبْقَرِيٍّ حِسَانٍ ﴿٧٦﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>76. </Text>
                Mereka bertelekan pada bantal-bantal yang hijau dan permadani-permadani yang indah.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                فَبِأَيِّ آلَاء رَبِّكُمَا تُكَذِّبَانِ ﴿٧٧﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>77. </Text>
                Maka nikmat Tuhan kamu yang manakah yang kamu dustakan?
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                تَبَارَكَ اسْمُ رَبِّكَ ذِي الْجَلَالِ وَالْإِكْرَامِ ﴿٧٨﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>78. </Text>
                Maha Agung nama Tuhanmu Yang Mempunyai Kebesaran dan Karunia.
              </Text>
            </View>
          </Content>
        )
        :null
      }
      { this.props.destop == 'Ayat'
        ?(
          <Content style={{backgroundColor: '#F3FEFF' }}>
            <View style={style.bismillah}>
              <Text style={style.innerBismillah}>
                بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                الرَّحْمَنُ ﴿١﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                عَلَّمَ الْقُرْآنَ ﴿٢﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                خَلَقَ الْإِنسَانَ ﴿٣﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                عَلَّمَهُ الْبَيَانَ ﴿٤﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                الشَّمْسُ وَالْقَمَرُ بِحُسْبَانٍ ﴿٥﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                وَالنَّجْمُ وَالشَّجَرُ يَسْجُدَانِ ﴿٦﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                وَالسَّمَاء رَفَعَهَا وَوَضَعَ الْمِيزَانَ ﴿٧﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                أَلَّا تَطْغَوْا فِي الْمِيزَانِ ﴿٨﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                وَأَقِيمُوا الْوَزْنَ بِالْقِسْطِ وَلَا تُخْسِرُوا الْمِيزَانَ ﴿٩﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                وَالْأَرْضَ وَضَعَهَا لِلْأَنَامِ ﴿١٠﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                فِيهَا فَاكِهَةٌ وَالنَّخْلُ ذَاتُ الْأَكْمَامِ ﴿١١﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                وَالْحَبُّ ذُو الْعَصْفِ وَالرَّيْحَانُ ﴿١٢﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                فَبِأَيِّ آلَاء رَبِّكُمَا تُكَذِّبَانِ ﴿١٣﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                خَلَقَ الْإِنسَانَ مِن صَلْصَالٍ كَالْفَخَّارِ ﴿١٤﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                وَخَلَقَ الْجَانَّ مِن مَّارِجٍ مِّن نَّارٍ ﴿١٥﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                فَبِأَيِّ آلَاء رَبِّكُمَا تُكَذِّبَانِ ﴿١٦﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                رَبُّ الْمَشْرِقَيْنِ وَرَبُّ الْمَغْرِبَيْنِ ﴿١٧﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                فَبِأَيِّ آلَاء رَبِّكُمَا تُكَذِّبَانِ ﴿١٨﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                مَرَجَ الْبَحْرَيْنِ يَلْتَقِيَانِ ﴿١٩﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                بَيْنَهُمَا بَرْزَخٌ لَّا يَبْغِيَانِ ﴿٢٠﴾
              </Text>
            </View><View style={style.contentA}>
              <Text style={style.arab}>
                فَبِأَيِّ آلَاء رَبِّكُمَا تُكَذِّبَانِ ﴿٢١﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                يَخْرُجُ مِنْهُمَا اللُّؤْلُؤُ وَالْمَرْجَانُ ﴿٢٢﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                فَبِأَيِّ آلَاء رَبِّكُمَا تُكَذِّبَانِ ﴿٢٣﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                وَلَهُ الْجَوَارِ الْمُنشَآتُ فِي الْبَحْرِ كَالْأَعْلَامِ ﴿٢٤﴾
              </Text>
            </View><View style={style.contentA}>
              <Text style={style.arab}>
                فَبِأَيِّ آلَاء رَبِّكُمَا تُكَذِّبَانِ ﴿٢٥﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                كُلُّ مَنْ عَلَيْهَا فَانٍ ﴿٢٦﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                وَيَبْقَى وَجْهُ رَبِّكَ ذُو الْجَلَالِ وَالْإِكْرَامِ ﴿٢٧﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                فَبِأَيِّ آلَاء رَبِّكُمَا تُكَذِّبَانِ ﴿٢٨﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                يَسْأَلُهُ مَن فِي السَّمَاوَاتِ وَالْأَرْضِ كُلَّ يَوْمٍ هُوَ فِي شَأْنٍ ﴿٢٩﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                فَبِأَيِّ آلَاء رَبِّكُمَا تُكَذِّبَانِ ﴿٣٠﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                سَنَفْرُغُ لَكُمْ أَيُّهَا الثَّقَلَانِ ﴿٣١﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                فَبِأَيِّ آلَاء رَبِّكُمَا تُكَذِّبَانِ ﴿٣٢﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                يَا مَعْشَرَ الْجِنِّ وَالْإِنسِ إِنِ اسْتَطَعْتُمْ أَن تَنفُذُوا مِنْ أَقْطَارِ السَّمَاوَاتِ وَالْأَرْضِ فَانفُذُوا لَا تَنفُذُونَ إِلَّا بِسُلْطَانٍ ﴿٣٣﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                فَبِأَيِّ آلَاء رَبِّكُمَا تُكَذِّبَانِ ﴿٣٤﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                يُرْسَلُ عَلَيْكُمَا شُوَاظٌ مِّن نَّارٍ وَنُحَاسٌ فَلَا تَنتَصِرَانِ ﴿٣٥﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                فَبِأَيِّ آلَاء رَبِّكُمَا تُكَذِّبَانِ ﴿٣٦﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                فَإِذَا انشَقَّتِ السَّمَاء فَكَانَتْ وَرْدَةً كَالدِّهَانِ ﴿٣٧﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                فَبِأَيِّ آلَاء رَبِّكُمَا تُكَذِّبَانِ ﴿٣٨﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                فَيَوْمَئِذٍ لَّا يُسْأَلُ عَن ذَنبِهِ إِنسٌ وَلَا جَانٌّ ﴿٣٩﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                فَبِأَيِّ آلَاء رَبِّكُمَا تُكَذِّبَانِ ﴿٤٠﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                يُعْرَفُ الْمُجْرِمُونَ بِسِيمَاهُمْ فَيُؤْخَذُ بِالنَّوَاصِي وَالْأَقْدَامِ ﴿٤١﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                فَبِأَيِّ آلَاء رَبِّكُمَا تُكَذِّبَانِ ﴿٤٢﴾
              </Text>
            </View><View style={style.contentA}>
              <Text style={style.arab}>
                هَذِهِ جَهَنَّمُ الَّتِي يُكَذِّبُ بِهَا الْمُجْرِمُونَ ﴿٤٣﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                يَطُوفُونَ بَيْنَهَا وَبَيْنَ حَمِيمٍ آنٍ ﴿٤٤﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                فَبِأَيِّ آلَاء رَبِّكُمَا تُكَذِّبَانِ ﴿٤٥﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                وَلِمَنْ خَافَ مَقَامَ رَبِّهِ جَنَّتَانِ ﴿٤٦﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                فَبِأَيِّ آلَاء رَبِّكُمَا تُكَذِّبَانِ ﴿٤٧﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                ذَوَاتَا أَفْنَانٍ ﴿٤٨﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                فَبِأَيِّ آلَاء رَبِّكُمَا تُكَذِّبَانِ ﴿٤٩﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                فِيهِمَا عَيْنَانِ تَجْرِيَانِ ﴿٥٠﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                فَبِأَيِّ آلَاء رَبِّكُمَا تُكَذِّبَانِ ﴿٥١﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                فِيهِمَا مِن كُلِّ فَاكِهَةٍ زَوْجَانِ ﴿٥٢﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                فَبِأَيِّ آلَاء رَبِّكُمَا تُكَذِّبَانِ ﴿٥٣﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                مُتَّكِئِينَ عَلَى فُرُشٍ بَطَائِنُهَا مِنْ إِسْتَبْرَقٍ وَجَنَى الْجَنَّتَيْنِ دَانٍ ﴿٥٤﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                فَبِأَيِّ آلَاء رَبِّكُمَا تُكَذِّبَانِ ﴿٥٥﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                فِيهِنَّ قَاصِرَاتُ الطَّرْفِ لَمْ يَطْمِثْهُنَّ إِنسٌ قَبْلَهُمْ وَلَا جَانٌّ ﴿٥٦﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                فَبِأَيِّ آلَاء رَبِّكُمَا تُكَذِّبَانِ ﴿٥٧﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                كَأَنَّهُنَّ الْيَاقُوتُ وَالْمَرْجَانُ ﴿٥٨﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                فَبِأَيِّ آلَاء رَبِّكُمَا تُكَذِّبَانِ ﴿٥٩﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                هَلْ جَزَاء الْإِحْسَانِ إِلَّا الْإِحْسَانُ ﴿٦٠﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                فَبِأَيِّ آلَاء رَبِّكُمَا تُكَذِّبَانِ ﴿٦١﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                وَمِن دُونِهِمَا جَنَّتَانِ ﴿٦٢﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                فَبِأَيِّ آلَاء رَبِّكُمَا تُكَذِّبَانِ ﴿٦٣﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                مُدْهَامَّتَانِ ﴿٦٤﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                فَبِأَيِّ آلَاء رَبِّكُمَا تُكَذِّبَانِ ﴿٦٥﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                فِيهِمَا عَيْنَانِ نَضَّاخَتَانِ ﴿٦٦﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                فَبِأَيِّ آلَاء رَبِّكُمَا تُكَذِّبَانِ ﴿٦٧﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                فِيهِمَا فَاكِهَةٌ وَنَخْلٌ وَرُمَّانٌ ﴿٦٨﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                فَبِأَيِّ آلَاء رَبِّكُمَا تُكَذِّبَانِ ﴿٦٩﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                فِيهِنَّ خَيْرَاتٌ حِسَانٌ ﴿٧٠﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                فَبِأَيِّ آلَاء رَبِّكُمَا تُكَذِّبَانِ ﴿٧١﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                حُورٌ مَّقْصُورَاتٌ فِي الْخِيَامِ ﴿٧٢﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                فَبِأَيِّ آلَاء رَبِّكُمَا تُكَذِّبَانِ ﴿٧٣﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                لَمْ يَطْمِثْهُنَّ إِنسٌ قَبْلَهُمْ وَلَا جَانٌّ ﴿٧٤﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                فَبِأَيِّ آلَاء رَبِّكُمَا تُكَذِّبَانِ ﴿٧٥﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                مُتَّكِئِينَ عَلَى رَفْرَفٍ خُضْرٍ وَعَبْقَرِيٍّ حِسَانٍ ﴿٧٦﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                فَبِأَيِّ آلَاء رَبِّكُمَا تُكَذِّبَانِ ﴿٧٧﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                تَبَارَكَ اسْمُ رَبِّكَ ذِي الْجَلَالِ وَالْإِكْرَامِ ﴿٧٨﴾
              </Text>
            </View>
          </Content>
        )
        :null
      }
      { this.props.destop == 'Arti'
        ?(
          <Content style={{backgroundColor: '#F3FEFF' }}>
            <View style={style.bismillah}>
              <Text style={style.innerBismillah}>
                بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>1. </Text>
                (Tuhan) Yang Maha Pemurah,
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>2. </Text>
                Yang telah mengajarkan al Quran.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>3. </Text>
                Dia menciptakan manusia.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>4. </Text>
                Mengajarnya pandai berbicara.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>5. </Text>
                Matahari dan bulan (beredar) menurut perhitungan.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>6. </Text>
                Dan tumbuh-tumbuhan dan pohon-pohonan kedua-duanya tunduk kepada-Nya.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>7. </Text>
                Dan Allah telah meninggikan langit dan Dia meletakkan neraca (keadilan).
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>8. </Text>
                Supaya kamu jangan melampaui batas tentang neraca itu.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>9. </Text>
                Dan tegakkanlah timbangan itu dengan adil dan janganlah kamu mengurangi neraca itu. 
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>10. </Text>
                Dan Allah telah meratakan bumi untuk makhluk(Nya).
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>11. </Text>
                Di bumi itu ada buah-buahan dan pohon kurma yang mempunyai kelopak mayang.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>12. </Text>
                Dan biji-bijian yang berkulit dan bunga-bunga yang harum baunya.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>13. </Text>
                Maka nikmat Tuhan kamu yang manakah yang kamu dustakan?
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>14. </Text>
                Dia menciptakan manusia dari tanah kering seperti tembikar, 
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>15. </Text>
                dan Dia menciptakan jin dari nyala api. 
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>16. </Text>
                Maka nikmat Tuhan kamu yang manakah yang kamu dustakan?
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>17. </Text>
                Tuhan yang memelihara kedua tempat terbit matahari dan Tuhan yang memelihara kedua tempat terbenamnya
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>18. </Text>
                Maka nikmat Tuhan kamu yang manakah yang kamu dustakan?
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>19. </Text>
                Dia membiarkan dua lautan mengalir yang keduanya kemudian bertemu,
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>20. </Text>
                antara keduanya ada batas yang tidak dilampaui masing-masing.
              </Text>
            </View><View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>21. </Text>
                Maka nikmat Tuhan kamu yang manakah yang kamu dustakan?
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>22. </Text>
                Dari keduanya keluar mutiara dan marjan.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>23. </Text>
                Maka nikmat Tuhan kamu yang manakah yang kamu dustakan?
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>24. </Text>
                Dan kepunyaan-Nya lah bahtera-bahtera yang tinggi layarnya di lautan laksana gunung-gunung. 
              </Text>
            </View><View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>25. </Text>
                Maka nikmat Tuhan kamu yang manakah yang kamu dustakan?
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>26. </Text>
                Semua yang ada di bumi itu akan binasa.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>27. </Text>
                Dan tetap kekal Dzat Tuhanmu yang mempunyai kebesaran dan kemuliaan.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>28. </Text>
                Maka nikmat Tuhan kamu yang manakah yang kamu dustakan? 
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>29. </Text>
                Semua yang ada di langit dan bumi selalu meminta kepada-Nya. Setiap waktu Dia dalam kesibukan. 
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>30. </Text>
                Maka nikmat Rabb-mu yang manakah yang kamu dustakan?
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>31. </Text>
                Kami akan memperhatikan sepenuhnya kepadamu hai manusia dan jin.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>32. </Text>
                Maka nikmat Tuhan kamu yang manakah yang kamu dustakan? 
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>33. </Text>
                Hai jama'ah jin dan manusia, jika kamu sanggup menembus (melintasi) penjuru langit dan bumi, maka lintasilah, kamu tidak dapat menembusnya kecuali dengan kekuatan.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>34. </Text>
                Maka nikmat Tuhan kamu yang manakah yang kamu dustakan?
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>35. </Text>
                Kepada kamu, (jin dan manusia) dilepaskan nyala api dan cairan tembaga maka kamu tidak dapat menyelamatkan diri (dari padanya).
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>36. </Text>
                Maka nikmat Tuhan kamu yang manakah yang kamu dustakan?
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>37. </Text>
                Maka apabila langit telah terbelah dan menjadi merah mawar seperti (kilapan) minyak.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>38. </Text>
                Maka nikmat Tuhan kamu yang manakah yang kamu dustakan?
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>39. </Text>
                Pada waktu itu manusia dan jin tidak ditanya tentang dosanya.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>40. </Text>
                Maka nikmat Tuhan kamu yang manakah yang kamu dustakan? 
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>41. </Text>
                Orang-orang yang berdosa dikenal dengan tanda-tandannya, lalu dipegang ubun-ubun dan kaki mereka.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>42. </Text>
                Maka nikmat Tuhan kamu yang manakah yang kamu dustakan?
              </Text>
            </View><View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>43. </Text>
                Inilah neraka Jahannam yang didustakan oleh orang-orang berdosa.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>44. </Text>
                Mereka berkeliling di antaranya dan di antara air mendidih yang memuncak panasnya.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>45. </Text>
                Maka nikmat Tuhan kamu yang manakah yang kamu dustakan?
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>46. </Text>
                Dan bagi orang yang takut akan saat menghadap Tuhannya ada dua surga.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>47. </Text>
                Maka nikmat Tuhan kamu yang manakah yang kamu dustakan?,
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>48. </Text>
                kedua surga itu mempunyai pohon-pohonan dan buah-buahan.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>49. </Text>
                Maka nikmat Tuhan kamu yang manakah yang kamu dustakan? 
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>50. </Text>
                Di dalam kedua surga itu ada dua buah mata air yang mengalir
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>51. </Text>
                Maka nikmat Tuhan kamu yang manakah yang kamu dustakan?
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>52. </Text>
                Di dalam kedua surga itu terdapat segala macam buah-buahan yang berpasangan.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>53. </Text>
                Maka nikmat Tuhan kamu yang manakah yang kamu dustakan?
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>54. </Text>
                Mereka bertelekan di atas permadani yang sebelah dalamnya dari sutera. Dan buah-buahan di kedua surga itu dapat (dipetik) dari dekat.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>55. </Text>
                Maka nikmat Tuhan kamu yang manakah yang kamu dustakan?
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>56. </Text>
                Di dalam surga itu ada bidadari-bidadari yang sopan menundukkan pandangannya, tidak pernah disentuh oleh manusia sebelum mereka (penghuni-penghuni surga yang menjadi suami mereka), dan tidak pula oleh jin.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>57. </Text>
                Maka nikmat Tuhan kamu yang manakah yang kamu dustakan?
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>58. </Text>
                Seakan-akan bidadari itu permata yakut dan marjan.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>59. </Text>
                Maka nikmat Tuhan kamu yang manakah yang kamu dustakan?
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>60. </Text>
                Tidak ada balasan kebaikan kecuali kebaikan (pula).
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>61. </Text>
                Maka nikmat Tuhan kamu yang manakah yang kamu dustakan?
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>62. </Text>
                Dan selain dari dua surga itu ada dua surga lagi
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>63. </Text>
                Maka nikmat Tuhan kamu yang manakah yang kamu dustakan?
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>64. </Text>
                Kedua surga itu (kelihatan) hijau tua warnanya. 
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>65. </Text>
                Maka nikmat Tuhan kamu yang manakah yang kamu dustakan?
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>66. </Text>
                Di dalam kedua surga itu ada dua buah mata air yang memancar.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>67. </Text>
                Maka nikmat Tuhan kamu yang manakah yang kamu dustakan?
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>68. </Text>
                Di dalam keduanya (ada macam-macam) buah-buahan dan kurma serta delima.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>69. </Text>
                Maka nikmat Tuhan kamu yang manakah yang kamu dustakan?
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>70. </Text>
                Di dalam surga itu ada bidadari-bidadari yang baik-baik lagi cantik-cantik.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>71. </Text>
                Maka nikmat Tuhan kamu yang manakah yang kamu dustakan?
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>72. </Text>
                (Bidadari-bidadari) yang jelita, putih bersih, dipingit dalam rumah. 
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>73. </Text>
                Maka nikmat Tuhan kamu yang manakah yang kamu dustakan?
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>74. </Text>
                Mereka tidak pernah disentuh oleh manusia sebelum mereka (penghuni-penghuni surga yang menjadi suami mereka), dan tidak pula oleh jin.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>75. </Text>
                Maka nikmat Tuhan kamu yang manakah yang kamu dustakan?
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>76. </Text>
                Mereka bertelekan pada bantal-bantal yang hijau dan permadani-permadani yang indah.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>77. </Text>
                Maka nikmat Tuhan kamu yang manakah yang kamu dustakan?
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>78. </Text>
                Maha Agung nama Tuhanmu Yang Mempunyai Kebesaran dan Karunia.
              </Text>
            </View>
          </Content>
        )
        :null
      }
          
      </ScrollView>
      </View>
    )
  }
}

const style = StyleSheet.create({
  container:{
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#fff',
    elevation: 3,
    width: '100%',
    backgroundColor: '#FFF',
    flex: 1,
  },
  wrepper:{
    paddingBottom: 20,
  },
  bismillah:{
    backgroundColor: '#D3EDEF',
    padding: 15,
  },
  innerBismillah:{
    textAlign: 'center',
    fontSize: 21,
  },
  contentA:{
    paddingLeft: 20,
    paddingRight: 20,
  },
  contentB:{
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#E5F8F9'
  },
  arab:{
    fontSize: 21,
    marginBottom: 10,
    marginTop: 20,
  },
  innerText:{
    marginBottom: 20,
    marginTop: 10,
    fontSize: 14,
    color: '#262626',
  },
})
