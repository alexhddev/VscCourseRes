# %%
import matplotlib.pyplot as plt

# %%
cat = ["bored", "happy", "bored"]
dog = ["happy", "bored", "happy"]
activity = ["combing", "drinking", "feeding"]

fig = ax = plt.subplot()
ax.plot(activity, dog, label="dog")
ax.plot(activity, cat, label="cat")
ax.legend()

# %%
plt.show()