// Mesin quiz: 10 soal acak tanpa pengulangan dalam satu sesi.
window.QuizEngine = {
  session:null,
  start(category){
    const pool=window.QUESTION_BANK.filter(q=>!category||q.category===category);
    const shuffled=[...pool].sort(()=>Math.random()-.5).slice(0,10);
    this.session={category:category||"Campuran",questions:shuffled,index:0,correct:0,answered:false,xp:0};
    return this.session;
  },
  current(){return this.session?.questions[this.session.index]||null;},
  answer(index){
    const s=this.session,q=this.current(); if(!s||!q||s.answered)return null;
    s.answered=true;const ok=index===q.answer;if(ok){s.correct++;s.xp+=20;}
    return {correct:ok,correctIndex:q.answer,explanation:q.explanation,finished:s.index===s.questions.length-1};
  },
  next(){if(!this.session)return false;this.session.index++;this.session.answered=false;return this.session.index<this.session.questions.length;},
  finish(){const s=this.session;if(!s)return null;const perfect=s.correct===10;return {total:10,correct:s.correct,wrong:10-s.correct,accuracy:s.correct*10,xp:s.xp+50+(perfect?50:0),perfect,category:s.category};}
};
