"""
将JS三元运算还原成为可读性较强的if else语句

"""
"""

"""
import uuid

dyh = 0
syh = 0

js_replace = {}


# 将完整括号内容取出

def marks_judge(s,c):
    """
    验证引号包含部分
    """
    global syh, dyh
    if syh == dyh == 0 and s == '"' and c not in ['/','\\']:  # 升级添加\"的判断
        syh += 1
        return True
    elif syh == 1 and s == '"':
        syh -= 1
        return True
    elif syh:
        return True
    if syh == dyh == 0 and s == "'"  and c not in ['/','\\']:  # 升级添加\'的判断
        dyh += 1
        return True
    elif dyh == 1 and s == "'":
        dyh -= 1
        return True
    elif dyh:
        return True
    return False


def replace_brackets_str(a):
    """
    将完整括号里的内容进行替换
    """
    t = 0
    # replace_count = 0
    th_jsss = a
    for i in range(len(a)):
        if marks_judge(a[i],a[i-1]):
            continue
        if a[i] == '(':
            if t == 0:
                start_subscript = i
            t += 1
        elif a[i] == ')':
            t -= 1
            if t == 0:
                # replace_count += 1
                # 报错大部分原因是因为引号不完整
                # 删除符合要求的前后括号
                start = a[start_subscript - 1] if a[start_subscript - 1].strip() else a[start_subscript - 2]
                if i + 1 >= len(a):
                    end = ':'
                elif a[i + 1].strip():
                    end = a[i + 1]
                else:
                    end = a[i + 2]
                if start in ['?', ':'] and end in ['?', ':']:
                    # pass
                    k = f'替换JS_{uuid.uuid4()}'
                    js_replace[k] = a[start_subscript + 1:i]
                    th_jsss = th_jsss.replace(a[start_subscript:i + 1], k)
                else:
                    js_replace[f'替换JS_{uuid.uuid4()}'] = a[start_subscript:i + 1]
    for k, v in js_replace.items():
        th_jsss = th_jsss.replace(v, k)
    return th_jsss


def value_judge(data_list):
    """
    赋值语句判断并将赋值语句进行拆分
    """
    judge_list = []
    assignment = str()
    # for data in data_list:
    #     if data.__contains__(' = '):
    #         judge_list.append(data[data.index(' = ') + 3:])
    #         assignment = data[:data.index(' = ') + 3]
    #     else:
    #         judge_list.append(data)
    # return assignment, judge_list
    judge_list = []
    assignment = str()
    for data in data_list:
        data = data.replace(' ', '')
        if data.replace('===', '').replace('==', '').__contains__('='):
            judge_list.append(data[data.replace('===', 'ppp').replace('==', 'ppp').index('=') + 1:])
            assignment = data[:data.index('=') + 1]
        else:
            judge_list.append(data)
    return assignment, judge_list

def cf(th_js, assignment=''):
    # 判断三元运算区域
    # 1个?表示公式为if (){}else{}
    # 2个?表示的公式为if (){}else if(){}else{}后期递增else if(){}
    str_if = 'if(<判断>){<语句>}'
    ser_elif = 'else if(<判断>){<语句>}'
    ser_else = 'else{<语句>}'
    wh = 0  # 统计问号数量
    max_wh = 0  # 控制控制深度
    mh = 0  # 统计冒号数量
    max_mh = 0  # 冒号控制深度
    # 记录起始到问号的下标
    start_b = 0
    cssss = -1  # 判断层级
    if ' ? ' not in th_js and '?' not in th_js:
        if th_js.strip().isdigit():
            return assignment + th_js + ';'
        else:
            return th_js + ';'

    result_js = str()  # 反馈js
    pd_str = str()  # 判断字符串
    for i in range(len(th_js)):
        if marks_judge(th_js[i], th_js[i - 1]):
            continue
        if th_js[i] == '?':
            wh += 1
            mh -= 1
        elif th_js[i] == ':':
            wh -= 1
            mh += 1
            if wh >= max_wh and cssss == -1:
                max_wh = wh
                max_mh = mh
            if cssss == -1:
                pd_str = th_js[start_b:i]
                if assignment:
                    _, judge_list = value_judge(pd_str.split('?')[:cssss])
                else:
                    assignment, judge_list = value_judge(pd_str.split('?')[:cssss])
                result_js = str_if.replace('<判断>', ' && '.join(judge_list)).replace(
                    '<语句>', cf(th_js[start_b:i].split('?')[-1], assignment))
                start_b = i + 1
                cssss -= 1
                max_mh += 1
            elif max_mh - mh == 0:
                _, judge_list = value_judge(pd_str.split('?')[:cssss])
                max_js = cf(th_js[start_b:i], assignment)
                result_js = result_js + ser_elif.replace('<判断>',
                                                         ' && '.join(judge_list)).replace('<语句>', max_js)
                cssss -= 1
                start_b = i + 1
                max_wh = wh
                max_mh += 1
            if wh == 0:
                # if th_js[start_b:].isdigit():
                #      pass
                # else:
                #     assignment = ''
                max_js = cf(th_js[start_b:], assignment)
                result_js = result_js + ser_else.replace('<语句>', max_js)
                break

    return result_js


if __name__ == '__main__':
    import re
    a = """Ai > 20 && (ie = Wt, Ye = "g", Zt = _t, Wt = Ye, cn += "\x00", sn += "tE", Tn += "an[\\{)\\(\\*", tt += "ei", Tn += ".noit", Ye = ro + ue, _t = 0, tt += "l", cn += "\x00", li = 2054)"""

    th_jsss = replace_brackets_str(a)
    # th_jsss = 'li = 24 > Ai ? U ? 16454 : 24802 : Qo ? 13314 : 5221'
    print(th_jsss)
    js = cf(th_jsss)
    for k, v in js_replace.items():
        js = js.replace(k, v)
    print(js)
    # with open('js/aly/1_14/collina.js', 'r', encoding='utf8') as ce:
    #     t = ce.read()
    # for a in re.findall('(12==Ai\?[\\s\\S]*?)\}\(\)', t):
    #     # print(a)
    #     th_jsss = replace_brackets_str(a)
    #     # print(js_replace)
    #     js = cf(th_jsss)
    #     print(a)
    #     print(js)
    #     for k, v in js_replace.items():
    #         js = js.replace(k, v)
    #
    #     t = t.replace(a, js)
    # with open('js/aly/1_14/collina_formatted2.js', 'w', encoding='utf8') as ce:
    #     ce.write(t)
