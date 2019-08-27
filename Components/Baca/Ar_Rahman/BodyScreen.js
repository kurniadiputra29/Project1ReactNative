import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, Dimensions, ScrollView} from 'react-native';
import { Content, Text} from "native-base";

export default class BodyScreen extends Component{
  render(){
    return(
      <View style={style.container}>
      <ScrollView style={style.wrepper}>
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
            (Tuhan) Yang Maha Pemurah,
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            عَلَّمَ الْقُرْآنَ ﴿٢﴾
          </Text>
          <Text style={style.innerText}>
            Yang telah mengajarkan al Quran.
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            خَلَقَ الْإِنسَانَ ﴿٣﴾
          </Text>
          <Text style={style.innerText}>
            Dia menciptakan manusia.
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            عَلَّمَهُ الْبَيَانَ ﴿٤﴾
          </Text>
          <Text style={style.innerText}>
            Mengajarnya pandai berbicara.
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            الشَّمْسُ وَالْقَمَرُ بِحُسْبَانٍ ﴿٥﴾
          </Text>
          <Text style={style.innerText}>
            Matahari dan bulan (beredar) menurut perhitungan.
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            وَالنَّجْمُ وَالشَّجَرُ يَسْجُدَانِ ﴿٦﴾
          </Text>
          <Text style={style.innerText}>
            Dan tumbuh-tumbuhan dan pohon-pohonan kedua-duanya tunduk kepada-Nya.
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            وَالسَّمَاء رَفَعَهَا وَوَضَعَ الْمِيزَانَ ﴿٧﴾
          </Text>
          <Text style={style.innerText}>
            Dan Allah telah meninggikan langit dan Dia meletakkan neraca (keadilan).
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            أَلَّا تَطْغَوْا فِي الْمِيزَانِ ﴿٨﴾
          </Text>
          <Text style={style.innerText}>
            Supaya kamu jangan melampaui batas tentang neraca itu.
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            وَأَقِيمُوا الْوَزْنَ بِالْقِسْطِ وَلَا تُخْسِرُوا الْمِيزَانَ ﴿٩﴾
          </Text>
          <Text style={style.innerText}>
            Dan tegakkanlah timbangan itu dengan adil dan janganlah kamu mengurangi neraca itu. 
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            وَالْأَرْضَ وَضَعَهَا لِلْأَنَامِ ﴿١٠﴾
          </Text>
          <Text style={style.innerText}>
            Dan Allah telah meratakan bumi untuk makhluk(Nya).
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            فِيهَا فَاكِهَةٌ وَالنَّخْلُ ذَاتُ الْأَكْمَامِ ﴿١١﴾
          </Text>
          <Text style={style.innerText}>
            Di bumi itu ada buah-buahan dan pohon kurma yang mempunyai kelopak mayang.
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            وَالْحَبُّ ذُو الْعَصْفِ وَالرَّيْحَانُ ﴿١٢﴾
          </Text>
          <Text style={style.innerText}>
            Dan biji-bijian yang berkulit dan bunga-bunga yang harum baunya.
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            فَبِأَيِّ آلَاء رَبِّكُمَا تُكَذِّبَانِ ﴿١٣﴾
          </Text>
          <Text style={style.innerText}>
            Maka nikmat Tuhan kamu yang manakah yang kamu dustakan?
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            خَلَقَ الْإِنسَانَ مِن صَلْصَالٍ كَالْفَخَّارِ ﴿١٤﴾
          </Text>
          <Text style={style.innerText}>
            Dia menciptakan manusia dari tanah kering seperti tembikar, 
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            وَخَلَقَ الْجَانَّ مِن مَّارِجٍ مِّن نَّارٍ ﴿١٥﴾
          </Text>
          <Text style={style.innerText}>
            dan Dia menciptakan jin dari nyala api. 
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            فَبِأَيِّ آلَاء رَبِّكُمَا تُكَذِّبَانِ ﴿١٦﴾
          </Text>
          <Text style={style.innerText}>
            Maka nikmat Tuhan kamu yang manakah yang kamu dustakan?
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            رَبُّ الْمَشْرِقَيْنِ وَرَبُّ الْمَغْرِبَيْنِ ﴿١٧﴾
          </Text>
          <Text style={style.innerText}>
            Tuhan yang memelihara kedua tempat terbit matahari dan Tuhan yang memelihara kedua tempat terbenamnya
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            فَبِأَيِّ آلَاء رَبِّكُمَا تُكَذِّبَانِ ﴿١٨﴾
          </Text>
          <Text style={style.innerText}>
            Maka nikmat Tuhan kamu yang manakah yang kamu dustakan?
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            مَرَجَ الْبَحْرَيْنِ يَلْتَقِيَانِ ﴿١٩﴾
          </Text>
          <Text style={style.innerText}>
            Dia membiarkan dua lautan mengalir yang keduanya kemudian bertemu,
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            بَيْنَهُمَا بَرْزَخٌ لَّا يَبْغِيَانِ ﴿٢٠﴾
          </Text>
          <Text style={style.innerText}>
            antara keduanya ada batas yang tidak dilampaui masing-masing.
          </Text>
        </View><View style={style.contentA}>
          <Text style={style.arab}>
            فَبِأَيِّ آلَاء رَبِّكُمَا تُكَذِّبَانِ ﴿٢١﴾
          </Text>
          <Text style={style.innerText}>
            Maka nikmat Tuhan kamu yang manakah yang kamu dustakan?
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            يَخْرُجُ مِنْهُمَا اللُّؤْلُؤُ وَالْمَرْجَانُ ﴿٢٢﴾
          </Text>
          <Text style={style.innerText}>
            Dari keduanya keluar mutiara dan marjan.
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            فَبِأَيِّ آلَاء رَبِّكُمَا تُكَذِّبَانِ ﴿٢٣﴾
          </Text>
          <Text style={style.innerText}>
            Maka nikmat Tuhan kamu yang manakah yang kamu dustakan?
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            وَلَهُ الْجَوَارِ الْمُنشَآتُ فِي الْبَحْرِ كَالْأَعْلَامِ ﴿٢٤﴾
          </Text>
          <Text style={style.innerText}>
            Dan kepunyaan-Nya lah bahtera-bahtera yang tinggi layarnya di lautan laksana gunung-gunung. 
          </Text>
        </View><View style={style.contentA}>
          <Text style={style.arab}>
            فَبِأَيِّ آلَاء رَبِّكُمَا تُكَذِّبَانِ ﴿٢٥﴾
          </Text>
          <Text style={style.innerText}>
            Maka nikmat Tuhan kamu yang manakah yang kamu dustakan?
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            كُلُّ مَنْ عَلَيْهَا فَانٍ ﴿٢٦﴾
          </Text>
          <Text style={style.innerText}>
            Semua yang ada di bumi itu akan binasa.
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            وَيَبْقَى وَجْهُ رَبِّكَ ذُو الْجَلَالِ وَالْإِكْرَامِ ﴿٢٧﴾
          </Text>
          <Text style={style.innerText}>
            Dan tetap kekal Dzat Tuhanmu yang mempunyai kebesaran dan kemuliaan.
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            فَبِأَيِّ آلَاء رَبِّكُمَا تُكَذِّبَانِ ﴿٢٨﴾
          </Text>
          <Text style={style.innerText}>
            Maka nikmat Tuhan kamu yang manakah yang kamu dustakan? 
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            يَسْأَلُهُ مَن فِي السَّمَاوَاتِ وَالْأَرْضِ كُلَّ يَوْمٍ هُوَ فِي شَأْنٍ ﴿٢٩﴾
          </Text>
          <Text style={style.innerText}>
            Semua yang ada di langit dan bumi selalu meminta kepada-Nya. Setiap waktu Dia dalam kesibukan. 
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            فَبِأَيِّ آلَاء رَبِّكُمَا تُكَذِّبَانِ ﴿٣٠﴾
          </Text>
          <Text style={style.innerText}>
            Maka nikmat Rabb-mu yang manakah yang kamu dustakan?
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            سَنَفْرُغُ لَكُمْ أَيُّهَا الثَّقَلَانِ ﴿٣١﴾
          </Text>
          <Text style={style.innerText}>
            Kami akan memperhatikan sepenuhnya kepadamu hai manusia dan jin.
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            فَبِأَيِّ آلَاء رَبِّكُمَا تُكَذِّبَانِ ﴿٣٢﴾
          </Text>
          <Text style={style.innerText}>
            Maka nikmat Tuhan kamu yang manakah yang kamu dustakan? 
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            يَا مَعْشَرَ الْجِنِّ وَالْإِنسِ إِنِ اسْتَطَعْتُمْ أَن تَنفُذُوا مِنْ أَقْطَارِ السَّمَاوَاتِ وَالْأَرْضِ فَانفُذُوا لَا تَنفُذُونَ إِلَّا بِسُلْطَانٍ ﴿٣٣﴾
          </Text>
          <Text style={style.innerText}>
            Hai jama'ah jin dan manusia, jika kamu sanggup menembus (melintasi) penjuru langit dan bumi, maka lintasilah, kamu tidak dapat menembusnya kecuali dengan kekuatan.
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            فَبِأَيِّ آلَاء رَبِّكُمَا تُكَذِّبَانِ ﴿٣٤﴾
          </Text>
          <Text style={style.innerText}>
            Maka nikmat Tuhan kamu yang manakah yang kamu dustakan?
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            يُرْسَلُ عَلَيْكُمَا شُوَاظٌ مِّن نَّارٍ وَنُحَاسٌ فَلَا تَنتَصِرَانِ ﴿٣٥﴾
          </Text>
          <Text style={style.innerText}>
            Kepada kamu, (jin dan manusia) dilepaskan nyala api dan cairan tembaga maka kamu tidak dapat menyelamatkan diri (dari padanya).
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            فَبِأَيِّ آلَاء رَبِّكُمَا تُكَذِّبَانِ ﴿٣٦﴾
          </Text>
          <Text style={style.innerText}>
            Maka nikmat Tuhan kamu yang manakah yang kamu dustakan?
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            فَإِذَا انشَقَّتِ السَّمَاء فَكَانَتْ وَرْدَةً كَالدِّهَانِ ﴿٣٧﴾
          </Text>
          <Text style={style.innerText}>
            Maka apabila langit telah terbelah dan menjadi merah mawar seperti (kilapan) minyak.
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            فَبِأَيِّ آلَاء رَبِّكُمَا تُكَذِّبَانِ ﴿٣٨﴾
          </Text>
          <Text style={style.innerText}>
            Maka nikmat Tuhan kamu yang manakah yang kamu dustakan?
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            فَيَوْمَئِذٍ لَّا يُسْأَلُ عَن ذَنبِهِ إِنسٌ وَلَا جَانٌّ ﴿٣٩﴾
          </Text>
          <Text style={style.innerText}>
            Pada waktu itu manusia dan jin tidak ditanya tentang dosanya.
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            فَبِأَيِّ آلَاء رَبِّكُمَا تُكَذِّبَانِ ﴿٤٠﴾
          </Text>
          <Text style={style.innerText}>
            Maka nikmat Tuhan kamu yang manakah yang kamu dustakan? 
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            يُعْرَفُ الْمُجْرِمُونَ بِسِيمَاهُمْ فَيُؤْخَذُ بِالنَّوَاصِي وَالْأَقْدَامِ ﴿٤١﴾
          </Text>
          <Text style={style.innerText}>
            Orang-orang yang berdosa dikenal dengan tanda-tandannya, lalu dipegang ubun-ubun dan kaki mereka.
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            فَبِأَيِّ آلَاء رَبِّكُمَا تُكَذِّبَانِ ﴿٤٢﴾
          </Text>
          <Text style={style.innerText}>
            Maka nikmat Tuhan kamu yang manakah yang kamu dustakan?
          </Text>
        </View><View style={style.contentA}>
          <Text style={style.arab}>
            هَذِهِ جَهَنَّمُ الَّتِي يُكَذِّبُ بِهَا الْمُجْرِمُونَ ﴿٤٣﴾
          </Text>
          <Text style={style.innerText}>
            Inilah neraka Jahannam yang didustakan oleh orang-orang berdosa.
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            يَطُوفُونَ بَيْنَهَا وَبَيْنَ حَمِيمٍ آنٍ ﴿٤٤﴾
          </Text>
          <Text style={style.innerText}>
            Mereka berkeliling di antaranya dan di antara air mendidih yang memuncak panasnya.
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            فَبِأَيِّ آلَاء رَبِّكُمَا تُكَذِّبَانِ ﴿٤٥﴾
          </Text>
          <Text style={style.innerText}>
            Maka nikmat Tuhan kamu yang manakah yang kamu dustakan?
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            وَلِمَنْ خَافَ مَقَامَ رَبِّهِ جَنَّتَانِ ﴿٤٦﴾
          </Text>
          <Text style={style.innerText}>
            Dan bagi orang yang takut akan saat menghadap Tuhannya ada dua surga.
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            فَبِأَيِّ آلَاء رَبِّكُمَا تُكَذِّبَانِ ﴿٤٧﴾
          </Text>
          <Text style={style.innerText}>
            Maka nikmat Tuhan kamu yang manakah yang kamu dustakan?,
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            ذَوَاتَا أَفْنَانٍ ﴿٤٨﴾
          </Text>
          <Text style={style.innerText}>
            kedua surga itu mempunyai pohon-pohonan dan buah-buahan.
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            فَبِأَيِّ آلَاء رَبِّكُمَا تُكَذِّبَانِ ﴿٤٩﴾
          </Text>
          <Text style={style.innerText}>
            Maka nikmat Tuhan kamu yang manakah yang kamu dustakan? 
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            فِيهِمَا عَيْنَانِ تَجْرِيَانِ ﴿٥٠﴾
          </Text>
          <Text style={style.innerText}>
            Di dalam kedua surga itu ada dua buah mata air yang mengalir
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            فَبِأَيِّ آلَاء رَبِّكُمَا تُكَذِّبَانِ ﴿٥١﴾
          </Text>
          <Text style={style.innerText}>
            Maka nikmat Tuhan kamu yang manakah yang kamu dustakan?
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            فِيهِمَا مِن كُلِّ فَاكِهَةٍ زَوْجَانِ ﴿٥٢﴾
          </Text>
          <Text style={style.innerText}>
            Di dalam kedua surga itu terdapat segala macam buah-buahan yang berpasangan.
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            فَبِأَيِّ آلَاء رَبِّكُمَا تُكَذِّبَانِ ﴿٥٣﴾
          </Text>
          <Text style={style.innerText}>
            Maka nikmat Tuhan kamu yang manakah yang kamu dustakan?
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            مُتَّكِئِينَ عَلَى فُرُشٍ بَطَائِنُهَا مِنْ إِسْتَبْرَقٍ وَجَنَى الْجَنَّتَيْنِ دَانٍ ﴿٥٤﴾
          </Text>
          <Text style={style.innerText}>
            Mereka bertelekan di atas permadani yang sebelah dalamnya dari sutera. Dan buah-buahan di kedua surga itu dapat (dipetik) dari dekat.
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            فَبِأَيِّ آلَاء رَبِّكُمَا تُكَذِّبَانِ ﴿٥٥﴾
          </Text>
          <Text style={style.innerText}>
            Maka nikmat Tuhan kamu yang manakah yang kamu dustakan?
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            فِيهِنَّ قَاصِرَاتُ الطَّرْفِ لَمْ يَطْمِثْهُنَّ إِنسٌ قَبْلَهُمْ وَلَا جَانٌّ ﴿٥٦﴾
          </Text>
          <Text style={style.innerText}>
            Di dalam surga itu ada bidadari-bidadari yang sopan menundukkan pandangannya, tidak pernah disentuh oleh manusia sebelum mereka (penghuni-penghuni surga yang menjadi suami mereka), dan tidak pula oleh jin.
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            فَبِأَيِّ آلَاء رَبِّكُمَا تُكَذِّبَانِ ﴿٥٧﴾
          </Text>
          <Text style={style.innerText}>
            Maka nikmat Tuhan kamu yang manakah yang kamu dustakan?
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            كَأَنَّهُنَّ الْيَاقُوتُ وَالْمَرْجَانُ ﴿٥٨﴾
          </Text>
          <Text style={style.innerText}>
            Seakan-akan bidadari itu permata yakut dan marjan.
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            فَبِأَيِّ آلَاء رَبِّكُمَا تُكَذِّبَانِ ﴿٥٩﴾
          </Text>
          <Text style={style.innerText}>
            Maka nikmat Tuhan kamu yang manakah yang kamu dustakan?
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            هَلْ جَزَاء الْإِحْسَانِ إِلَّا الْإِحْسَانُ ﴿٦٠﴾
          </Text>
          <Text style={style.innerText}>
            Tidak ada balasan kebaikan kecuali kebaikan (pula).
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            فَبِأَيِّ آلَاء رَبِّكُمَا تُكَذِّبَانِ ﴿٦١﴾
          </Text>
          <Text style={style.innerText}>
            Maka nikmat Tuhan kamu yang manakah yang kamu dustakan?
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            وَمِن دُونِهِمَا جَنَّتَانِ ﴿٦٢﴾
          </Text>
          <Text style={style.innerText}>
            Dan selain dari dua surga itu ada dua surga lagi
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            فَبِأَيِّ آلَاء رَبِّكُمَا تُكَذِّبَانِ ﴿٦٣﴾
          </Text>
          <Text style={style.innerText}>
            Maka nikmat Tuhan kamu yang manakah yang kamu dustakan?
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            مُدْهَامَّتَانِ ﴿٦٤﴾
          </Text>
          <Text style={style.innerText}>
            Kedua surga itu (kelihatan) hijau tua warnanya. 
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            فَبِأَيِّ آلَاء رَبِّكُمَا تُكَذِّبَانِ ﴿٦٥﴾
          </Text>
          <Text style={style.innerText}>
            Maka nikmat Tuhan kamu yang manakah yang kamu dustakan?
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            فِيهِمَا عَيْنَانِ نَضَّاخَتَانِ ﴿٦٦﴾
          </Text>
          <Text style={style.innerText}>
            Di dalam kedua surga itu ada dua buah mata air yang memancar.
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            فَبِأَيِّ آلَاء رَبِّكُمَا تُكَذِّبَانِ ﴿٦٧﴾
          </Text>
          <Text style={style.innerText}>
            Maka nikmat Tuhan kamu yang manakah yang kamu dustakan?
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            فِيهِمَا فَاكِهَةٌ وَنَخْلٌ وَرُمَّانٌ ﴿٦٨﴾
          </Text>
          <Text style={style.innerText}>
            Di dalam keduanya (ada macam-macam) buah-buahan dan kurma serta delima.
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            فَبِأَيِّ آلَاء رَبِّكُمَا تُكَذِّبَانِ ﴿٦٩﴾
          </Text>
          <Text style={style.innerText}>
            Maka nikmat Tuhan kamu yang manakah yang kamu dustakan?
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            فِيهِنَّ خَيْرَاتٌ حِسَانٌ ﴿٧٠﴾
          </Text>
          <Text style={style.innerText}>
            Di dalam surga itu ada bidadari-bidadari yang baik-baik lagi cantik-cantik.
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            فَبِأَيِّ آلَاء رَبِّكُمَا تُكَذِّبَانِ ﴿٧١﴾
          </Text>
          <Text style={style.innerText}>
            Maka nikmat Tuhan kamu yang manakah yang kamu dustakan?
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            حُورٌ مَّقْصُورَاتٌ فِي الْخِيَامِ ﴿٧٢﴾
          </Text>
          <Text style={style.innerText}>
            (Bidadari-bidadari) yang jelita, putih bersih, dipingit dalam rumah. 
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            فَبِأَيِّ آلَاء رَبِّكُمَا تُكَذِّبَانِ ﴿٧٣﴾
          </Text>
          <Text style={style.innerText}>
            Maka nikmat Tuhan kamu yang manakah yang kamu dustakan?
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            لَمْ يَطْمِثْهُنَّ إِنسٌ قَبْلَهُمْ وَلَا جَانٌّ ﴿٧٤﴾
          </Text>
          <Text style={style.innerText}>
            Mereka tidak pernah disentuh oleh manusia sebelum mereka (penghuni-penghuni surga yang menjadi suami mereka), dan tidak pula oleh jin.
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            فَبِأَيِّ آلَاء رَبِّكُمَا تُكَذِّبَانِ ﴿٧٥﴾
          </Text>
          <Text style={style.innerText}>
            Maka nikmat Tuhan kamu yang manakah yang kamu dustakan?
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            مُتَّكِئِينَ عَلَى رَفْرَفٍ خُضْرٍ وَعَبْقَرِيٍّ حِسَانٍ ﴿٧٦﴾
          </Text>
          <Text style={style.innerText}>
            Mereka bertelekan pada bantal-bantal yang hijau dan permadani-permadani yang indah.
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            فَبِأَيِّ آلَاء رَبِّكُمَا تُكَذِّبَانِ ﴿٧٧﴾
          </Text>
          <Text style={style.innerText}>
            Maka nikmat Tuhan kamu yang manakah yang kamu dustakan?
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            تَبَارَكَ اسْمُ رَبِّكَ ذِي الْجَلَالِ وَالْإِكْرَامِ ﴿٧٨﴾
          </Text>
          <Text style={style.innerText}>
            Maha Agung nama Tuhanmu Yang Mempunyai Kebesaran dan Karunia.
          </Text>
        </View>
      </Content>
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
    width: Dimensions.get('window').width,
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
