const reverse = require('./index');

describe("reverse", () => {
  it("should return empty string if passed empty string", () => {
    expect(reverse('')).toEqual('');
  });

  it("should reverse the given string", () => {
    expect(reverse('abc')).toEqual('cba');
  });

  it("should reverse the given string if it has multiple words", () => {
    expect(reverse('This is string to be reversed')).toEqual('desrever eb ot gnirts si sihT');
  });

  it("should reverse the given string even if it has multiple words and is long", () => {
    const stringToBeReversed = "The process in which a function calls itself directly or indirectly is \
      called recursion and the corresponding function is called a recursive function. Using a recursive \
      algorithm, certain problems can be solved quite easily. Examples of such problems are \
      Towers of Hanoi (TOH), Inorder/Preorder/Postorder Tree Traversals, DFS of Graph, etc. \
      A recursive function solves a particular problem by calling a copy of itself and solving \
      smaller subproblems of the original problems. Many more recursive calls can be generated as \
      and when required. It is essential to know that we should provide a certain case in order to \
      terminate this recursion process. So we can say that every time the function calls itself \
      with a simpler version of the original problem.";

    const expectedResult = ".melborp lanigiro eht fo noisrev relpmis a htiw \
      flesti sllac noitcnuf eht emit yreve taht yas nac ew oS .ssecorp noisrucer siht etanimret \
      ot redro ni esac niatrec a edivorp dluohs ew taht wonk ot laitnesse si tI .deriuqer nehw dna \
      sa detareneg eb nac sllac evisrucer erom ynaM .smelborp lanigiro eht fo smelborpbus rellams \
      gnivlos dna flesti fo ypoc a gnillac yb melborp ralucitrap a sevlos noitcnuf evisrucer A \
      .cte ,hparG fo SFD ,slasrevarT eerT redrotsoP/redroerP/redronI ,)HOT( ionaH fo srewoT \
      era smelborp hcus fo selpmaxE .ylisae etiuq devlos eb nac smelborp niatrec ,mhtirogla \
      evisrucer a gnisU .noitcnuf evisrucer a dellac si noitcnuf gnidnopserroc eht dna noisrucer dellac \
      si yltceridni ro yltcerid flesti sllac noitcnuf a hcihw ni ssecorp ehT";

    expect(reverse(stringToBeReversed)).toEqual(expectedResult);
  });
});
