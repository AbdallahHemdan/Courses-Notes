# Rules to write a better commit message
## These are my preferences for a good commit message, feel free to fork this gist and add your own standards, or add comment here to share yours with the community.
### 1. Include only the files related to the feature you are implementing:
- Don't add any file that is not related to the main issue, you can make it in a separate commit.
- Separating files that not related is important in the revert cases.
- Revise the whole changes always before committing and make sure to mention each change you made in the message.
### 2. Commit subject should be concise and reflect the essence of the commit:
- Imagine the commit as an Email to the owner or your team mates.
- Subject in the first and main sentence of the commit, it should be concise and to the point.
- It shouldn't exceed 50 char.
- You should leave an empty line after it.
- You should capitalize the first letter of the sentence.
- don't add [dot] in the end of the subject
### 3. Commit body should include all the details of the changes you made and how:
- Write all the details of you change after the subject.
- try to demonstrate why did you made these changes.
- Some people likes to write the body as a paragraph.
- I prefer to write the body as a list of changes to write separately what is the change in almost each file.
- Try also to be concise here not to have a long body, it's recommended for each line in the body no to exceed 72 char.
### 4. Add reference to the feature/bug you are implementing/fixing if applied:
- If you have an issue you are resolving or a task on the board, try to add a reference to it in the end of the commit message.
- You can use `ref #<number>` which refer to the commit and add a comment to the original issue on github for example.
- Using `fix #<number>` or `close #<number>` will close the issue with that number after merging to the main branch.
- That is a good practise to follow so in the pull request you can relate to the issue you are fixing.
### 5. Always make the commit message verbal:
- Always start the commit with a verb.
- The verb can be imperative, past continues, or past.
- Initiate a conversation with the commit as you might ask it `what are you doing?` or `what did you do?`.
- Your commit should always complete this sentence "If applied, this commit will ..."

## Example of the ideal commit message (in my opinion)
```
Enhance README file

- Add project details, and list of content into README file
- Rename iterator folder removed the for in of to make it tidy 
- Add folder for the 14th  episode to add docs later in it

fix #2
```
