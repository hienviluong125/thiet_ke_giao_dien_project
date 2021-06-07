import React from "react";
import { TextInput, ScrollView, Text, View, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Modal, Portal, FAB, RadioButton, Button, DefaultTheme, ThemeProvider as PaperProvider } from 'react-native-paper';
import { useState, useEffect } from "react";

const questionNo = ['A', 'B', 'C', 'D'];
let defaultQuestion = [
  {
    question: "Đặc điểm chung của các đơn chất halogen (F2, Cl2, Br2, I2):",
    answers: [
      "Ở điều kiện thường là chất khí",
			"Tính chất hóa học cơ bản là tính oxi hóa",
			"vừa có tính oxi hóa, vừa có tính khử",
      "Tác dụng mãnh liệt với nước",
    ],
    correctAnswer: 1,
  },
  {
    question: "Trong số các polime sau : nhựa bakelit (1) ; polietilen (2); tơ capron (3); poli(vinyl clorua) (4); xenlulozơ (5). Chất thuộc loại polime tổng hợp là",
    answers: [
      "(1), (2), (3), (5)",
      "(1), (2), (4), (5)",
      "(2), (3), (4), (5)",
      "(1), (2), (3), (4)",
    ],
    correctAnswer: 3,
  },
  {
    question: "Khi có tia lửa điện hoặc nhiệt đọ cao. Nitơ tác dụng trực tiếp với oxi tạo ra hợp chất X. X tiếp tục tác dụng với oxi trong không khí tạo thành hợp chất Y. Công thức của X, Y lần lượt là",
    answers: [
      "N2O, NO.",
      "NO2, N2O5.",
      "NO, NO2",
      "N2O5, HNO3."
    ],
    correctAnswer: 0,
  },
  {
    question: "Nitơ có số oxi hóa âm trong hợp chất với nguyên tố nào sau đây ?",
    answers: [
      "H.",
      "Q.",
      "Cl.",
      "F.",
    ],
    correctAnswer: 0,
  },

  {
    question: "Nung một lượng NH3 trong bình kín. Sau một thời gian đưa về nhiệt độ ban đầu thấy áp suất khí trong bình tăng 1,5 lần so với áp suất ban đầu. Tỉ lệ NH3 bị phân hủy là",
    answers: [
      "25%.",
      "33%.",
      "50%.",
      "67%.",
    ],
    correctAnswer: 1,
  },

  {
    question: "Cho 14,8 gam Ca(OH)2 vào 150 gam dung dịch (NH4)2SO4 26,4% rồi đun nóng thu được V lít (đktc) khí X (giả sử toàn bộ khí sinh ra thoát ra khí dung dịch ). Để đốt cháy hết V lít khí X trên cần vừa đủ lượng O2 sinh ra khi nung m gam KClO3 (có xúc tác). Giá trị của m là",
    answers: [
      "24,5.",
      "49.",
      "36,75.",
      "12,25.",
    ],
    correctAnswer: 1,
  },
  {
    question: "Cho 3 gam Al phản ứng vừa đủ với dung dịch chứa 28 gam HNO3 thu được khí X và dung dịch không chứa NH4NO3. Khí X là",
    answers: [
      "N2.",
      "N2O.",
      "NO.",
      "NO2.",
    ],
    correctAnswer: 3,
  },
  {
    question: "Cho 3,58 gam Al phản ứng vừa đủ với dung dịch chứa 28 gam HNO3 dư thu được 0,04 mol NO và 0,06 mol NO2 và dung dịch chứa m gam muối nitrat (không có NH4NO3). Giá trị của m là",
    answers: [
      "9,78.",
      "11,02.",
      "14,74.",
      "17,22."
    ],
    correctAnswer: 3,
  },
  {
    question: "Nung 18,96 ham hỗn hợp X gồm Cu, Cu(NO3)2 trong bình kín không chứa không khí đến khi phản ứng hoàn toàn thu được m gam rắn Y. Để hòa tan hết Y cần dùng 400 ml dung dịch HNO3 1M thu được a mol khí NO (sản phẩm khử duy nhất). Giá trị của m và a lần lượt là",
    answers: [
      "12,48 và 0,08",
      "13,44 và 0,04",
      "12,48 và 0,04",
      "13,44 và 0,08",
    ],
    correctAnswer: 2,
  },
  {
    question: "Các electron trong cùng một lớp có mức năng lượng?",
    answers: [
      "Bằng nhau",
      "Gần bằng nhau",
      "Không bằng nhau",
      "Tùy từng nguyên tố"
    ],
    correctAnswer: 0,
  },
  {
    question: "Hạt nhân của hầu hết các nguyên tử được cấu tạo từ các loại hạt sau:",
    answers: [
      "electron, notron",
      "proton, notron",
      "electron, proton",
      "electron, proton, notron"
    ],
    correctAnswer: 1,
  },
  {
    question: "Khối lượng nguyên tử tập trung hầu hết ở hạt nhân và được tính bằng",
    answers: [
      "Tổng số hạt proton và tổng số hạt nơtron",
      "Tổng khối lượng của proton, nơtron và electron có trong nguyên tử",
      "Tổng khối lượng của các hạt nơtron và electron",
      "Tổng khối lượng của proton và electron"
    ],
    correctAnswer: 1,
  },
  {
    question: "Tưởng tượng ta có thể phóng đại hạt nhân thành một quả bóng bàn có đường kính 4 cm thì đường kính của nguyên tử là bao nhiêu? Biết rằng đường kính của nguyên tử lớn hơn đường kính của hạt nhân khoảng 104 lần.",
    answers: [
      "4m.    ",
      "40 m.    ",
      "400 m.   ",
      "4000 m."
    ],
    correctAnswer: 1,
  },
  {
    question: "Hai nguyên tố X và Y cùng một chu kì và ở 2 phân nhóm chính kế tiếp nhau có tổng số proton trong 2 hạt nhân nguyên tử là 25. X và Y thuộc chu kỳ và nhóm nào say đây trong bảng tuần hoàn?",
    answers: [
      "Chu kỳ 3 và các nhóm IA và IIA",
      "Chu kỳ 3 và các nhóm IIA và IIIA",
      "Chu kỳ 2và các nhóm IIA và IIIA",
      "Chu kỳ 2 và các nhóm IA và IIA"
    ],
    correctAnswer: 3,
  },
  {
    question: "Nhận định nào sau đây chính xác?",
    answers: [
      "Phân lớp electron là tập hợp các electron có mức năng lượng gần bằng nhau",
      "Phân lớp electron thường được kí hiệu bằng các chữ số: 1, 2, 3",
      "Lớp electron là tập hợp các electron có mức năng lượng bằng nhau",
      "Lớp electron thường được kí hiệu bằng các chữ cái: K, L, M, ..."
    ],
    correctAnswer: 0,
  },
  {
    question: "Tổng số hạt mang điện trong hợp chất XY2 bằng 44. Số hạt mang điện của nguyên tử Y nhiều hơn số hạt mang điện của nguyên tử X là 4. số hiệu nguyên từ của X và Y lần lượt là",
    answers: [
      "5 và 9",
      "7 và 9",
      "8 và 16",
      "6 và 8"
    ],
    correctAnswer: 1,
  }
]


const QuizAnswer = ({ navigation, route }) => {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: "#004640",
      accent: "#f1c40f",
    },
  };

  useEffect(() => {
    if(route.params && route.params.qIdx) {
      setQuestionIndex(route.params.qIdx)
      setFastNavQuestionIdx(route.params.qIdx + 1)
    }
  }, [route]);

  const [totalQuestions, _1] = useState(defaultQuestion.length);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [questionList, _2] = useState(defaultQuestion)


  const [choosedIdx, setChooseIdx] = useState(-1)
  const containerStyle = {
    backgroundColor: 'white',
    padding: 20,
    margin: 20
  };

  const [fastNavError, setFastNavError] = useState("")
  const [fastNavQuestionIdx, setFastNavQuestionIdx] = useState(1)
  const [displayingSubmitModal, setDisplayingSubmitModal] = useState(true)
  const [visible, setVisible] = useState(false);


  function showModal() {
    setDisplayingSubmitModal(true)
    setVisible(true);
  }
  function hideModal() { setVisible(false); }

  function nextQuestion() {
    if (questionIndex === totalQuestions - 1) {
      return
    }

    setChooseIdx(-1)
    setQuestionIndex(questionIndex + 1)
    setFastNavQuestionIdx(questionIndex + 2)
  }

  function prevQuestion() {
    if (questionIndex === 0) {
      return
    }

    setChooseIdx(-1)
    setQuestionIndex(questionIndex - 1)
    setFastNavQuestionIdx(questionIndex)
  }

  function chooseAnswer(idx) {
    setChooseIdx(idx)
    setFastNavQuestionIdx(idx)
  }

  function submitResult() {
    hideModal()
    navigation.navigate("QuizList", { receiveResult: true })
  }

  function openJumpToQuestion() {
    setDisplayingSubmitModal(false)
    setVisible(true);
  }

  function onHandleChangeFastNav(text) {
    setFastNavQuestionIdx(text.replace(/[^0-9]/g, ''))
  }

  function onSubmitFastNav(e) {
    let idx = parseInt(fastNavQuestionIdx)

    if ((idx - 1) < 0 || (idx - 1) > totalQuestions - 1) {
      setFastNavError("Số câu không hợp lệ")
      return
    }

    if (idx - 1 == questionIndex) {
      setFastNavError("Bạn đã đang ở câu này!")
      return
    }
    setFastNavError("")
    setQuestionIndex(idx - 1)
    setVisible(false)
  }

  return (
    <PaperProvider theme={theme}>
      <Portal style={{ padding: 0, margin: 0 }}>
        <Modal visible={visible} onDismiss={hideModal} style={{ padding: 0, margin: 0 }} contentContainerStyle={containerStyle}>
          {
            displayingSubmitModal
              ? (
                <View>
                  <Text style={{ color: 'rgba(0, 0, 0, 0.85)', fontSize: 15 }}>Bạn có chắc chắn muốn thực hiền hành động này hay không ? Những câu hỏi chưa trả lời sẽ không được tính điểm.</Text>
                  <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <Button onPress={hideModal}>Hủy</Button>
                    <Button onPress={submitResult}>Xác nhận</Button>
                  </View>
                </View>
              )
              : (
                <View>
                  <Text style={{ fontSize: 15, textAlign: 'center', fontWeight: '500' }}>Chuyển nhanh đến câu</Text>
                  <Text style={{ display: fastNavError.length > 0 ? 'block' : 'none', fontSize: 15, textAlign: 'center', fontWeight: '400', color: 'red', marginTop: 5 }}>{fastNavError}</Text>
                  <TextInput keyboardType="numeric" style={{ textAlign: 'center', marginTop: 15, borderRadius: 4, borderWidth: 1, borderColor: "rgba(33, 33, 33, 0.4)", fontSize: 15, padding: 10 }} placeholder="Điền vào số câu bạn muốn chuyển đén..." value={fastNavQuestionIdx.toString()} onChangeText={onHandleChangeFastNav} />
                  <Button onPress={onSubmitFastNav} style={{ backgroundColor: '#004640', marginTop: 15 }} labelStyle={{ fontSize: 15, color: '#fff' }}>
                    Xác nhận
                  </Button>
                </View>
              )
          }
        </Modal>
      </Portal>
      <View style={{ backgroundColor: "#ffffff", height: "100%", display: 'flex' }}>
        <View style={styles.breadcum}>

          <Text style={styles.breadcumText}>
            Bài tập
          </Text>

          <Icon name="chevron-right" style={styles.chevronIcon} />

					<Text style={styles.breadcumText}>
            Đáp án
          </Text>

          <Icon name="chevron-right" style={styles.chevronIcon} />

          <Text style={[styles.breadcumText, styles.activeBreadcumText]}>
            {route.params.quizLession.length > 30 ? route.params.quizLession.substring(0, 27) + '...' : route.params.quizLession}
          </Text>
        </View>

        <ScrollView style={[styles.question]}>
          <View style={{ display: 'flex', flexDirection: 'row', marginHorizontal: 10, marginTop: 10 }}>
            <Text style={{ fontSize: 18, alignItems: 'flex-start' }}>
              <Text style={{ fontWeight: 'bold' }}>Câu {questionIndex + 1}: </Text>
              {questionList[questionIndex].question}</Text>
          </View>
          {
            questionList[questionIndex].answers.map((answer, idx) =>
            (
              <View style={[{ marginHorizontal: 10, marginTop: 20, paddingHorizontal: 15, paddingVertical: 20, backgroundColor: "rgba(33, 33, 33, 0.1)", borderRadius: 4 }, questionList[questionIndex].correctAnswer === idx ? { backgroundColor: '#B2DFDB' } : {}]}>
                <Text style={{ fontSize: 18 }} >{questionNo[idx]}. {answer}</Text>
              </View>
            )
            )
          }

					<View style={{paddingHorizontal: 15, marginTop: 20}}>
						<View style={{ borderTopWidth: 1, width: '100%', borderTopColor: '#004640', marginBottom: 15}} ></View>
						<Text style={{fontSize: 18, fontWeight: "500"}}>Đáp án:</Text>
						<Text style={{fontSize: 18, fontWeight: "500", color: "#C62828", marginTop: 10}}>
							A. Sai vì Br2 là chất lỏng và L2 là chất rắn
						</Text>
						<Text style={{fontSize: 18, fontWeight: "500", color: "#004640", marginTop: 10}}>
							B. Đúng vì các đơn chất Halogen có tính chất hóa học cơ bản là tính oxi hóa mạnh
						</Text>
						<Text style={{fontSize: 18, fontWeight: "500", color: "#C62828", marginTop: 10}}>
							C. Sai vì F2 chỉ có tính oxi hóa
						</Text>
						<Text style={{fontSize: 18, fontWeight: "500", color: "#C62828", marginTop: 10}}>
							D. Sai vì ngoại trừ F2 thì các chất còn lại tác dụng kém với nước
						</Text>
					</View>

        </ScrollView>
        {/* Bottom navigation */}
        <View style={{ marginTop: 20, marginBottom: 20, marginHorizontal: 10 }}>
          <View style={{ alignItems: 'center', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 }}>
            <FAB
              small
              icon="chevron-left"
              // disabled={questionIndex === 0}
              color={questionIndex === 0 ? '#004640' : '#ffffff'}
              style={questionIndex === 0 ? { backgroundColor: '#ffffff' } : { backgroundColor: '#004640' }}
              onPress={() => prevQuestion()}
            />
            <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(33, 33, 33, 0.08)', borderRadius: 4, padding: 10 }}>
              <Text onPress={openJumpToQuestion} style={{ fontSize: 17 }}>{questionIndex + 1}/{totalQuestions}</Text>
            </View>

            <FAB
              small
              icon="chevron-right"
              // disabled={questionIndex === totalQuestions - 1}
              color={questionIndex === totalQuestions - 1 ? '#004640' : '#ffffff'}
              style={questionIndex === totalQuestions - 1 ? { backgroundColor: '#ffffff' } : { backgroundColor: '#004640' }}
              onPress={nextQuestion}
            />
          </View>
        </View>
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  breadcum: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    padding: 10,
    margin: 10,
    fontSize: 16,
    borderRadius: 4,
    backgroundColor: "rgba(33, 33, 33, 0.08)"
  },

  breadcumText: {
    color: "rgba(0, 0, 0, 0.5)",
    fontSize: 18
  },

  activeBreadcumText: {
    color: "rgb(0, 0, 0)",
  },

  chevronIcon: {
    fontSize: 15,
    color: "rgba(0, 0, 0, 0.2)",
    marginTop: 4,
    marginHorizontal: 10,
  },

  question: {
    width: '100%'
  }
});

export default QuizAnswer;
