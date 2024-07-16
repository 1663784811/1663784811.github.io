import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as e,a as s}from"./app-9pqFnJBk.js";const l={},d=s(`<div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>
#include &lt;stdio.h&gt;
#include &lt;Windows.h&gt;

LRESULT CALLBACK LowLevelKeyboardProc(int nCode, WPARAM wParam, LPARAM lParam) {
    if (nCode &gt;= 0 &amp;&amp; wParam == WM_KEYDOWN) {
        KBDLLHOOKSTRUCT* pKeyStruct = (KBDLLHOOKSTRUCT*)lParam;
        DWORD vkCode = pKeyStruct-&gt;vkCode;
        FILE* file = fopen(&quot;xxx.txt&quot;, &quot;a&quot;);
        if (file != NULL) {
            fprintf(file, &quot;%ld\\n&quot;, vkCode);
            fclose(file);
        }
    }
    return CallNextHookEx(NULL, nCode, wParam, lParam);
}

int main() {
    // 设置键盘钩子
    HHOOK hook = SetWindowsHookEx(WH_KEYBOARD_LL, LowLevelKeyboardProc, NULL, 0);
    if (hook == NULL) {
        printf(&quot;Failed to install hook\\n&quot;);
        return 1;
    }

    // 消息循环，等待键盘事件
    MSG msg;
    while (GetMessage(&amp;msg, NULL, 0, 0) != 0) {
        TranslateMessage(&amp;msg);
        DispatchMessage(&amp;msg);
    }

    // 卸载键盘钩子
    UnhookWindowsHookEx(hook);
    return 0;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),a=[d];function v(r,c){return i(),e("div",null,a)}const u=n(l,[["render",v],["__file","1.win获取键盘键码.html.vue"]]);export{u as default};
