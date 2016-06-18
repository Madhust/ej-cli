@echo on

set expath=%1

md external

xcopy %expath%\external external /s /q /y